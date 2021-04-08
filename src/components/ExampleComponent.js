import React, { memo } from 'react'
import { d } from '../App'

export const ExampleComponent = memo(({ text1 }) => {
  console.log('enter ExampleComponent')
  return (
    <div>
      <p>{text1}</p>
      <button onClick={() => d('toplevelEvent1')}>click</button>
    </div>
  )
})

export const ViewComponent = memo(({ text2 }) => {
  console.log('enter ViewComponent')
  return <p>{text2}</p>
})

export const ConstComponent = memo(() => {
  console.log('enter ConstComponent')
  return <p>{'bbb'}</p>
})
