package ise.server;

import java.io.InputStream;
import java.util.Arrays;

import com.github.javafaker.Faker;

import org.hl7.fhir.r4.model.Enumerations;
import org.hl7.fhir.r4.model.Observation;
import org.hl7.fhir.r4.model.Patient;
import org.hl7.fhir.r4.model.Reference;
import org.hl7.fhir.r4.model.StringType;

import ca.uhn.fhir.context.FhirContext;
import ca.uhn.fhir.parser.IParser;

/**
 *
 * @author natc <nathanielcamomot@gmail.com>
 */
public final class TestUtils {

	private static final Faker faker = new Faker();
	private static final IParser parser = FhirContext.forR4().newJsonParser();

	public static Patient fakePatient() {
		Patient patient = new Patient();
		patient.setBirthDate(faker.date().birthday());
		patient.addName().setFamily(faker.name().lastName())
				.setGiven(Arrays.asList(new StringType(faker.name().firstName())));
		if (faker.bool().bool()) {
			patient.setGender(Enumerations.AdministrativeGender.MALE);
		} else {
			patient.setGender(Enumerations.AdministrativeGender.FEMALE);
		}
		return patient;
	}

	public static Observation fakeObservation(String file, String patientId) {
		InputStream is = TestUtils.class.getClassLoader().getResourceAsStream(file);
		Observation observation = parser.parseResource(Observation.class, is);

		Reference reference = new Reference();
		reference.setReference("Patient/" + patientId);
		observation.setSubject(reference);

		observation.setPerformer(null);
		return observation;
	}
}
