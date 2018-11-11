import * as config from 'config'

type webapp = {
  port: number
  prefix: string
}
export const webapp: webapp = config.get('webapp')

type ruter = {
  prefix: string
  dir: string
}
export const ruter: ruter[] = config.get('ruter')