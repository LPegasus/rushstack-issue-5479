import { Magic } from "./magic/Magic.mjs";

export function greeting(name) {
  return `Hi ${name}! Greetings from "lib1".\n${Magic.lionKing()}`;
}
