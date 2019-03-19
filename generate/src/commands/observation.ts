import {Command, flags} from '@oclif/command'

import {observation} from '../services/fhir'

export default class Observation extends Command {
  static description = 'Generates an observation'

  static flags = {
    help: flags.help({char: 'h'}),
    low: flags.string({
      char: 'l',
      description:
        'low reference value, default: based on observation type chosen'
    }),
    high: flags.string({
      char: 'i',
      description:
        'high reference value, default: based on observation type chosen'
    })
  }

  static args = [
    {
      name: 'type',
      description: 'observation type',
      options: [
        'co2',
        'creatinine',
        'erythrocyte',
        'gfr',
        'glucose',
        'heartrate',
        'temperature'
      ],
      required: true
    },
    {
      name: 'patient',
      description: 'patient id',
      required: true
    },
    {
      name: 'value',
      description: 'value of the observation',
      required: true
    }
  ]

  async run() {
    const {args, flags} = this.parse(Observation)
    const obs = require('../sample/' + args.type + '.json')
    obs.subject.reference = 'Patient/' + args.patient
    obs.valueQuantity.value = args.value
    // no performer for now
    delete obs.performer
    if (flags.low) {
      if (obs.referenceRange[0].low) {
        obs.referenceRange[0].low = {
          value: flags.low
        }
      } else {
        obs.referenceRange[0].low.value = flags.low
      }
    }

    if (flags.high) {
      if (obs.referenceRange[0].high) {
        obs.referenceRange[0].high = {
          value: flags.high
        }
      } else {
        obs.referenceRange[0].high.value = flags.high
      }
    }
    const response = await observation.create(obs)

    this.log('Generated: ' + JSON.stringify(response.data))
  }
}
