package ise.server;

import static org.assertj.core.api.Assertions.assertThat;

import org.hl7.fhir.instance.model.api.IIdType;
import org.hl7.fhir.r4.model.Observation;
import org.hl7.fhir.r4.model.Patient;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.context.SpringBootTest.WebEnvironment;
import org.springframework.boot.web.server.LocalServerPort;
import org.springframework.test.context.ActiveProfiles;
import org.springframework.test.context.junit4.SpringRunner;

import ca.uhn.fhir.context.FhirContext;
import ca.uhn.fhir.rest.client.api.IGenericClient;

@RunWith(SpringRunner.class)
@SpringBootTest(webEnvironment = WebEnvironment.RANDOM_PORT)
@ActiveProfiles("test")
public class BasicTest {

	private static final Logger log = LoggerFactory.getLogger(BasicTest.class);

	@Autowired
	FhirContext fhirContext;

	@LocalServerPort
	int port;

	IGenericClient client;

	@Before
	public void before() {
		client = fhirContext.newRestfulGenericClient("http://localhost:" + port + "/fhir");
	}

	@Test
	public void createAndReadPatient() {
		Patient patient = SeedUtils.fakePatient();
		IIdType id = client.create().resource(patient).execute().getId();
		log.info("Patient created: {}", id);

		Patient result = client.read().resource(Patient.class).withId(id).execute();
		assertThat(result.getName().get(0).getFamily()).isEqualTo(patient.getName().get(0).getFamily());
		assertThat(result.getName().get(0).getGivenAsSingleString())
				.isEqualTo(patient.getName().get(0).getGivenAsSingleString());
		assertThat(result.getGender()).isEqualTo(patient.getGender());
	}

	@Test
	public void createAndReadObservation() {
		Patient patient = SeedUtils.fakePatient();
		IIdType patientId = client.create().resource(patient).execute().getId();

		Observation observation = SeedUtils.fakeObservation("1.json", patientId.getIdPart());

		IIdType obsId = client.create().resource(observation).execute().getId();
		log.info("Observation created: {}", obsId);
	}
}
