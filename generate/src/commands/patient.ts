import {Command, flags} from '@oclif/command'
import * as faker from 'faker'
import * as moment from 'moment'

import {patient} from '../services/fhir'

export default class Patient extends Command {
  static description = 'Generates a patient'

  static flags = {
    help: flags.help({char: 'h'}),
    family: flags.string({
      char: 'f',
      description: 'family name, default: random fake family name'
    }),
    given: flags.string({
      char: 'g',
      description: 'given name, default: random fake given name',
      default: faker.name.firstName()
    }),
    gender: flags.string({
      char: 'e',
      description: 'gender, default: random male or female',
      options: ['male', 'female']
    }),
    birthdate: flags.string({
      char: 'b',
      description: 'birthdate, default: random date in the past'
    }),
    seed: flags.integer({
      char: 's',
      description: 'seed x the parameter value'
    })
  }

  async run() {
    const {flags} = this.parse(Patient)

    if (flags.seed) {
      for (let i = 0; i < flags.seed; i++) {
        const response = await patient.create(this.createPatient({}))
        this.log('Generated: ' + JSON.stringify(response.data))
      }
    } else {
      const response = await patient.create(this.createPatient(flags))
      this.log('Generated: ' + JSON.stringify(response.data))
    }
  }

  createPatient(flags: any) {
    const lastName = flags.family || faker.name.lastName()
    const firstName = flags.given || faker.name.firstName()
    const gender = flags.gender || faker.random.boolean() ? 'male' : 'female'
    const bd =
      flags.birthdate || moment(faker.date.past()).format('YYYY-MM-DD')

    return {
      resourceType: 'Patient',
      active: true,
      gender,
      name: [
        {
          family: lastName,
          given: firstName
        }
      ],
      birthDate: bd,
      deceasedBoolean: false
    }
  }
}
