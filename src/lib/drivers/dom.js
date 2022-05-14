import { fromEvent, map } from 'callbag-basics-esmodules'
import startWith from 'callbag-start-with'

export function node(selector) {
  return document.querySelector(selector)
}

export function click$(selector) {
  let i = 0
  return map(() => i++)(fromEvent(node(selector), 'click'))
}

export function select$(selector) {
  const n = node(selector)
  const option$ = map((e) => e.target.value)(fromEvent(n, 'change'))
  return startWith(n.value)(option$)
}
