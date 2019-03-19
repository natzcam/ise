import {Command, flags} from '@oclif/command'

import {observation} from '../services/fhir'

export default class Observation extends Command {
  static description = 'Generates an observation'

  static flags = {
    help: flags.help({char: 'h'}),
    patient: flags.string({
      char: 'p',
      description: 'patient id',
      required: true
    }),
    value: flags.string({
      char: 'v',
      description: 'value',
      required: true
    }),
    low: flags.string({
      char: 'l',
      description: 'low',
      required: true
    }),
    high: flags.string({
      char: 'i',
      description: 'high',
      required: true
    })
  }

  async run() {
    const {flags} = this.parse(Observation)

    const response = await observation.create({
      resourceType: 'Observation',
      status: 'final',
      subject: {
        reference: 'Patient/' + flags.patient
      },
      valueQuantity: {
        value: flags.value
      },
      referenceRange: [
        {
          low: {
            value: flags.low
          },
          high: {
            value: flags.high
          }
        }
      ]
    })

    this.log('Generated: ' + JSON.stringify(response.data))
  }
}
