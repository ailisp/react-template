import { ExampleComponent, ViewComponent, ConstComponent } from '../components/ExampleComponent'

export const Home = ({ state }) => {
    return <div>
        <ExampleComponent text1={state.get('text1')} />
        <ViewComponent text2={state.get('text2')} />
        <ConstComponent />
    </div>
}