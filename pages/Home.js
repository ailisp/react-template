import React from 'react'
import {
  ExampleComponent,
  ViewComponent,
  ConstComponent,
} from '../components/ExampleComponent'

export default function Home({ state }) {
  return (
    <div>
      <h1>Ha Ha</h1>
      <div>
        <ExampleComponent text1={state.get('text1')} />
        <ViewComponent text2={state.get('text2')} />
        <ConstComponent />
        <button onClick={() => d('goPath', { path: '/page1' })}>
          go page1
        </button>
        <a href="/page1">go page1</a>
      </div>
    </div>
  )
}
