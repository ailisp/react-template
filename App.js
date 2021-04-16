import React, { useContext } from 'react'
import { Platform } from 'react-native'
import router from './router'
import { StateProvider, store } from './store.js'

let _d = (e) => {}

export let d = (type, args = {}) => {
  _d({ ...args, type })
}

if (Platform.OS == 'web') {
  window.d = d
}

function App_() {
  let { state, dispatch } = useContext(store)
  _d = dispatch

  if (Platform.OS == 'web') {
    window.state = state
  }
  let Page = router(state.get('path'))
  return <Page state={state} />
}

export default function App() {
  return (
    <StateProvider>
      <App_ />
    </StateProvider>
  )
}
