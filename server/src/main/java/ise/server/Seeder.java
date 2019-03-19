package ise.server;

import java.util.List;
import java.util.stream.Collectors;

import javax.annotation.PostConstruct;

import org.hl7.fhir.instance.model.api.IIdType;
import org.hl7.fhir.r4.model.Bundle;
import org.hl7.fhir.r4.model.Observation;
import org.hl7.fhir.r4.model.Patient;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Profile;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;

import ca.uhn.fhir.context.FhirContext;
import ca.uhn.fhir.rest.api.SearchTotalModeEnum;
import ca.uhn.fhir.rest.client.api.IGenericClient;

/**
 *
 * @author natc <nathaniel.camomot@legalmatch.com>
 */
@Component
@Profile("!test")
public class Seeder implements CommandLineRunner {

	private static final Logger log = LoggerFactory.getLogger(Seeder.class);
	private final int maxSampleObservations = 6;
	private final int maxSeed = 10;

	@Autowired
	FhirContext fhirContext;

	IGenericClient client;

	@PostConstruct
	private void init() {
		client = fhirContext.newRestfulGenericClient("http://localhost:8888/fhir");
	}

	// schedule random insertion of fake observations
	@Scheduled(initialDelay = 120000, fixedRate = 60000)
	public void seedObservation() {
		List<String> patientIds = getPatientIds();
		String randomPatientId = patientIds.get(SeedUtils.randomNumber(patientIds.size()));
		int randomObservationId = SeedUtils.randomNumber(maxSampleObservations);
		Observation observation = SeedUtils.fakeObservation(randomObservationId + ".json", "1");
		IIdType obsId = client.create().resource(observation).execute().getId();
		log.info("Created fake observation: {}", obsId);
	}

	@Override
	public void run(String... args) throws Exception {
		if (noPatients()) {
			seedPatients();
		} else {
			log.info("Already seeded patients!");
		}
	}

	private List<String> getPatientIds() {
		Bundle bundle = client.search().forResource(Patient.class).elementsSubset("identifier")
				.returnBundle(Bundle.class).execute();
		return bundle.getEntry().stream().map(entry -> entry.getResource())
				.map(resource -> resource.getIdElement().getIdPart()).collect(Collectors.toList());
	}

	private boolean noPatients() {
		Bundle bundle = client.search().forResource(Patient.class).count(1).totalMode(SearchTotalModeEnum.ACCURATE)
				.returnBundle(Bundle.class).execute();
		return bundle.getTotal() == 0;
	}

	private void seedPatients() {
		log.info("Seeding patients!");
		for (int i = 0; i < maxSeed; i++) {
			Patient pt = SeedUtils.fakePatient();
			String ptId = client.create().resource(pt).execute().getId().getValue();
			log.info("Created fake patient: {}", ptId);
		}
	}

}
