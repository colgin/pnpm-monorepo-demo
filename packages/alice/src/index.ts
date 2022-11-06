import { helloBar } from 'bar'

export function helloAlice(name: string) {
  console.log(helloBar(name))
  return `hello ${name}, this is alice`
}