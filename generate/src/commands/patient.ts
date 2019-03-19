import {Command, flags} from '@oclif/command'
import * as faker from 'faker'
import * as moment from 'moment'

import {patient} from '../services/fhir'

export default class Patient extends Command {
  static description = 'Generates a patient'

  static flags = {
    help: flags.help({char: 'h'})
  }

  static args = [
    {
      name: 'family',
      description: 'family name',
      default: faker.name.lastName()
    },
    {
      name: 'given',
      description: 'given name',
      default: faker.name.firstName()
    },
    {
      name: 'gender',
      description: 'gender',
      options: ['male', 'female'],
      default: 'male'
    },
    {
      name: 'birthdate',
      description: 'birth date',
      default: moment(faker.date.past()).format('YYYY-MM-DD')
    }
  ]

  async run() {
    const {args, flags} = this.parse(Patient)

    const response = await patient.create({
      resourceType: 'Patient',
      active: true,
      gender: args.gender,
      name: [
        {
          family: args.family,
          given: [args.given]
        }
      ],
      birthDate: args.birthdate,
      deceasedBoolean: false
    })

    this.log('Generated: ' + JSON.stringify(response.data))
  }
}
