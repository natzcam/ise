generate
========

generate

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/generate.svg)](https://npmjs.org/package/generate)
[![Downloads/week](https://img.shields.io/npm/dw/generate.svg)](https://npmjs.org/package/generate)
[![License](https://img.shields.io/npm/l/generate.svg)](https://github.com/ise/generate/blob/master/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g generate
$ generate COMMAND
running command...
$ generate (-v|--version|version)
generate/0.0.0 win32-x64 node-v8.12.0
$ generate --help [COMMAND]
USAGE
  $ generate COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`generate hello [FILE]`](#generate-hello-file)
* [`generate help [COMMAND]`](#generate-help-command)
* [`generate patient [FILE]`](#generate-patient-file)

## `generate hello [FILE]`

describe the command here

```
USAGE
  $ generate hello [FILE]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print

EXAMPLE
  $ generate hello
  hello world from ./src/hello.ts!
```

_See code: [src\commands\hello.ts](https://github.com/ise/generate/blob/v0.0.0/src\commands\hello.ts)_

## `generate help [COMMAND]`

display help for generate

```
USAGE
  $ generate help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v2.1.6/src\commands\help.ts)_

## `generate patient [FILE]`

describe the command here

```
USAGE
  $ generate patient [FILE]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print
```

_See code: [src\commands\patient.ts](https://github.com/ise/generate/blob/v0.0.0/src\commands\patient.ts)_
<!-- commandsstop -->
