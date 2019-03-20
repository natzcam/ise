## Server
1. Java SDK 8
2. Apache Maven 3.5.0

`cd server`

`./build` - build classes and jars

`./test`  - run tests

`./run` - run [hapi fhir](http://hapifhir.io/) server at http://localhost:8888/fhir

## Frontend
1. Node v8

`cd frontend`

`npm install` - install dependencies

`npm start` - run frontend Angular4+ dev server at http://localhost:4200

## Generation CLI
1. Node v8

`cd generation`

`npm install` - install dependencies

### Generate patients
```sh
$ ./bin/run patient -h
Generates a patient

USAGE
  $ generate patient

OPTIONS
  -b, --birthdate=birthdate  birthdate, default: random date in the past
  -e, --gender=male|female   gender, default: random male or female
  -f, --family=family        family name, default: random fake family name
  -g, --given=given          [default: Zelda] given name, default: random fake given name
  -h, --help                 show CLI help
  -s, --seed=seed            seed x the parameter value
```
Example:

`./bin/run patient -s 10` - seed 10 patients

`./bin/run patient` - generate 1 randomized patient

### Generate observations
```sh
$ ./bin/run observation -h
Generates an observation

USAGE
  $ generate observation FILE PATIENT VALUE

ARGUMENTS
  FILE     sample observation file path
  PATIENT  patient id
  VALUE    value of the observation

OPTIONS
  -h, --help       show CLI help
  -i, --high=high  high reference value, default: based on observation type chosen
  -l, --low=low    low reference value, default: based on observation type chosen
```

Example:

`./bin/run observation samples/heartrate.json ${PATIENT ID} 70 -l 60 -i 200` - generate an observation based on samples/heartrate.json with 'Patient/${PATIENT ID}' and value of 70 beats/min, low reference value of 60 and high reference value of 200. **Patient must exist first**

## Notes
1. Scripts are all shell, so in windows, you need at least use Git Bash to easily run them
2. Patients, Observations, Subscriptions are stored as FHIR resources using a customized [HAPI FHIR](http://hapifhir.io/) server.
3. DB is H2 file-based database, no installation needed.
4. When you load a patient view, a [Subscription](https://www.hl7.org/fhir/subscription.html) with criteria 'Observation?subject=Patient/{id}' is created, with channel as websocket. A websocket connection is then made following this specification https://www.hl7.org/fhir/subscription.html#2.46.7.2. If a ping is received, a refresh will be done in the background. There were tweaks which I had to make for websocket. Perhaps, communicate this back to HAPI FHIR project.
5. After running the server and frontend dev server, generate 10 patients with `cd generate` and then `./bin/run patient -s 10`
