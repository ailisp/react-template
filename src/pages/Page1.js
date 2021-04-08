import { d } from '../App'

export const Page1 = ({ state }) => {
    return <div>
        <button onClick={() => d('goPath', {path: '/'})}>go home</button>
    </div>
}