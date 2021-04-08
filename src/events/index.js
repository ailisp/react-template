import { d } from '../App'

export const toplevelEvent1 = (state, _args) => {
  return state.set('text2', 'ccc')
}

export const goPath = (state, { path }) => {
  const url = new URL(window.location)
  url.pathname = path
  window.history.pushState({}, '', url)
  return state.set('path', path)
}

export const _setState = (_state, { newState }) => {
  return newState
}

window.setState = (newState) => {
  d('_setState', { newState })
}
