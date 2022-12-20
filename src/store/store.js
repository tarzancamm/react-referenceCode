//! Boilerplate Redux Store - manage global state
import {createStore} from 'redux' // Can use redux toolkit instead

let initialState = {
    name: "Cameron",
    count: 0,
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        default:
            return state
    }
}

const store = createStore(reducer)

export default store