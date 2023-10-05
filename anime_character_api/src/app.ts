import yargs, { type ArgumentsCamelCase, type Argv } from 'yargs'

import { bootstrap } from './cli'

yargs.strict().command(
  'bootstrap [port] [host]',
  'Bootstrap application',
  (setup: Argv): void => {
    setup
      .positional('port', { type: 'number', describe: 'Port', default: 8000 })
      .positional('host', { type: 'string', describe: 'Host', default: '::' })
  },
  async (args: ArgumentsCamelCase): Promise<void> => {
    await bootstrap(Number(args.port),String(args.host))
  }
).argv
