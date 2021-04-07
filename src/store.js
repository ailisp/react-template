// store.js
import React, { createContext, useReducer } from 'react';
import * as events from './events';
import {Map, List} from 'immutable'

const initialState = Map({text1: 'aaa', text2: 'bbb'})
export const store = createContext(initialState);
const { Provider } = store;

export const StateProvider = ({ children }) => {
    const [state, dispatch] = useReducer((state, action) => {
        return events[action.type](state, action)
    }, initialState)
    return <Provider value={{ state, dispatch }}>{children}</Provider>;
};