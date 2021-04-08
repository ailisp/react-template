import {
  ExampleComponent,
  ViewComponent,
  ConstComponent,
} from '../components/ExampleComponent'
import { d } from '../App'

export const Home = ({ state }) => {
  return (
    <div>
      <ExampleComponent text1={state.get('text1')} />
      <ViewComponent text2={state.get('text2')} />
      <ConstComponent />
      <button onClick={() => d('goPath', { path: '/page1' })}>go page1</button>
      <a href="/page1">go page1</a>
    </div>
  )
}
