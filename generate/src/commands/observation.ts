import {Command, flags} from '@oclif/command'
import * as jsonfile from 'jsonfile'
import * as _ from 'lodash'

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
      name: 'file',
      description: 'sample observation file path',
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
    const obs = jsonfile.readFileSync(args.file)
    _.set(obs, 'subject.reference', 'Patient/' + args.patient)
    _.set(obs, 'valueQuantity.value', args.value)
    _.set(obs, 'effectiveDateTime', new Date().toISOString())
    // no performer for now
    delete obs.performer

    if (flags.low) {
      _.set(obs, 'referenceRange[0].low.value', flags.low)
    }

    if (flags.high) {
      _.set(obs, 'referenceRange[0].high.value', flags.high)
    }
    const response = await observation.create(obs)

    this.log('Generated: ' + JSON.stringify(response.data))
  }
}
