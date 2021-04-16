import { d } from '../App'
import React from 'react'

export const Page1 = ({ state }) => {
  return (
    <div>
      <button onClick={() => d('goPath', { path: '/' })}>go home</button>
    </div>
  )
}
