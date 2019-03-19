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
      description: 'family name',
      default: faker.name.lastName()
    }),
    given: flags.string({
      char: 'n',
      description: 'given name',
      default: faker.name.firstName()
    }),
    gender: flags.string({
      char: 'g',
      description: 'gender',
      options: ['male', 'female'],
      default: faker.random.boolean() ? 'male' : 'female'
    }),
    birthdate: flags.string({
      char: 'b',
      description: 'birthdate',
      default: moment(faker.date.past()).format('YYYY-MM-DD')
    })
  }

  async run() {
    const {flags} = this.parse(Patient)

    const response = await patient.create({
      resourceType: 'Patient',
      active: true,
      gender: flags.gender,
      name: [
        {
          family: flags.family,
          given: [flags.given]
        }
      ],
      birthDate: flags.birthdate,
      deceasedBoolean: false
    })

    this.log('Generated: ' + JSON.stringify(response.data))
  }
}
