package ise.server;

import static org.awaitility.Awaitility.await;
import static org.hamcrest.Matchers.contains;
import static org.hamcrest.Matchers.equalTo;
import static org.junit.Assert.assertThat;

import java.net.URI;
import java.util.ArrayList;
import java.util.List;
import java.util.concurrent.Future;
import java.util.concurrent.TimeUnit;

import org.eclipse.jetty.websocket.api.Session;
import org.eclipse.jetty.websocket.api.annotations.OnWebSocketConnect;
import org.eclipse.jetty.websocket.api.annotations.OnWebSocketMessage;
import org.eclipse.jetty.websocket.api.annotations.WebSocket;
import org.eclipse.jetty.websocket.client.ClientUpgradeRequest;
import org.eclipse.jetty.websocket.client.WebSocketClient;
import org.hl7.fhir.r4.model.CodeableConcept;
import org.hl7.fhir.r4.model.Coding;
import org.hl7.fhir.r4.model.Observation;
import org.hl7.fhir.r4.model.Patient;
import org.hl7.fhir.r4.model.Reference;
import org.hl7.fhir.r4.model.Subscription;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.web.server.LocalServerPort;
import org.springframework.test.context.junit4.SpringRunner;

import ca.uhn.fhir.context.FhirContext;
import ca.uhn.fhir.rest.api.EncodingEnum;
import ca.uhn.fhir.rest.client.api.IGenericClient;

/**
 *
 * @author natc <nathanielcamomot@gmail.com>
 */
@RunWith(SpringRunner.class)
@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
public class WebSocketTest {

	private static final Logger log = LoggerFactory.getLogger(WebSocketTest.class);

	@Autowired
	FhirContext fhirContext;

	@LocalServerPort
	int port;

	IGenericClient client;
	WebSocketClient wsClient;
	String subId;
	String patientId;
	String otherPatientId;
	SocketImplementation socket;

	@Before
	public void before() throws Exception {
		client = fhirContext.newRestfulGenericClient("http://localhost:" + port + "/fhir");
		client.setEncoding(EncodingEnum.JSON);
		Patient patient = TestUtils.fakePatient();
		patientId = client.create().resource(patient).execute().getId().getIdPart();

		Patient otherPatient = TestUtils.fakePatient();
		otherPatientId = client.create().resource(otherPatient).execute().getId().getIdPart();

		Subscription subscription = createSubscription(patientId);
		subId = client.create().resource(subscription).execute().getId().getIdPart();

		wsClient = new WebSocketClient();
		wsClient.start();

		URI url = new URI("ws://localhost:" + port + "/websocket");
		ClientUpgradeRequest request = new ClientUpgradeRequest();
		socket = new SocketImplementation(subId);
		Future<Session> connection = wsClient.connect(socket, url, request);

		Session session = connection.get(2, TimeUnit.SECONDS);
		log.info("Connected to WS: {}", session.isOpen());
	}

	@Test
	public void createObservation() throws Exception {
		Observation observation = new Observation();
		CodeableConcept codeableConcept = new CodeableConcept();
		observation.setCode(codeableConcept);
		Coding coding = codeableConcept.addCoding();
		coding.setCode("82313006");
		coding.setSystem("SNOMED-CT");
		Reference reference = new Reference();
		reference.setReference("Patient/" + patientId);
		observation.setSubject(reference);
		observation.setStatus(Observation.ObservationStatus.FINAL);

		String obsId = client.create().resource(observation).execute().getId().getIdPart();

		log.info("Observation 1 created: {}", obsId);

		await().until(() -> socket.getMessages().size(), equalTo(2));
		assertThat(socket.getMessages(), contains("bound " + subId, "ping " + subId));
	}

	@Test
	public void createObservationThatDoesNotMatch() throws Exception {
		Observation observation = new Observation();
		CodeableConcept codeableConcept = new CodeableConcept();
		observation.setCode(codeableConcept);
		Coding coding = codeableConcept.addCoding();
		coding.setCode("82313006");
		coding.setSystem("SNOMED-CT");
		Reference reference = new Reference();
		reference.setReference("Patient/" + otherPatientId);
		observation.setSubject(reference);
		observation.setStatus(Observation.ObservationStatus.FINAL);

		String obsId = client.create().resource(observation).execute().getId().getIdPart();

		log.info("Observation 2 created: {}", obsId);

		await().until(() -> socket.getMessages().size(), equalTo(1));
		assertThat(socket.getMessages(), contains("bound " + subId));
	}

	@WebSocket
	public static class SocketImplementation {

		private final String criteria;
		private final List<String> messages = new ArrayList<>();
		private boolean gotBound;
		private String subsId;

		public SocketImplementation(String theCriteria) {
			criteria = theCriteria;
		}

		public List<String> getMessages() {
			return messages;
		}

		@OnWebSocketConnect
		public void onConnect(Session session) {
			try {
				String sending = "bind " + criteria;
				log.info("Sending: {}", sending);
				session.getRemote().sendString(sending);

				log.info("Connection: DONE");
			} catch (Throwable t) {
				log.error("Failure", t);
			}
		}

		@OnWebSocketMessage
		public void onMessage(String message) {
			log.info("Got msg: " + message);
			messages.add(message);

			if (message.startsWith("bound ")) {
				gotBound = true;
				subsId = (message.substring("bound ".length()));
			} else if (gotBound && message.startsWith("add " + subsId + "\n")) {
				String text = message.substring(("add " + subsId + "\n").length());
				log.info("text: " + text);
			} else {
				log.error("Unexpected message: " + message);
			}
		}
	}

	private Subscription createSubscription(String patientId) {
		Subscription subscription = new Subscription();
		subscription.setReason("Monitor new neonatal function (note, age will be determined by the monitor)");
		subscription.setStatus(Subscription.SubscriptionStatus.ACTIVE);
		subscription.setCriteria("Observation?subject=Patient/" + patientId);

		Subscription.SubscriptionChannelComponent channel = new Subscription.SubscriptionChannelComponent();
		channel.setType(Subscription.SubscriptionChannelType.WEBSOCKET);
		channel.setPayload("application/json");
		subscription.setChannel(channel);
		return subscription;
	}

}
