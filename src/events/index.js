import {Map, List} from 'immutable'
import { d } from '../App'

export const toplevelEvent1 = (state, args) => {
    return state.set('text2', 'ccc')
}

export const _setState = (_state, {newState}) => {
    return newState
}

window.setState = (newState) => {
    d('_setState', {newState}) 
}