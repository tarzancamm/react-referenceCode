import { createContext, useReducer } from 'react'

const initialState = {

}

//Should be named something that's relavent to what the context is used for
const BoilerplateContext = createContext()

const BoilerplateContextProvider = (props) => {
    const reducer = (state, action) => {
        switch(action.type) {
            default:
                return state
        }
    }

    const [state, dispatch] = useReducer(reducer, initialState)

    return (
        <BoilerplateContext.Provider value={{state, dispatch}}>
            {props.children} 
        </BoilerplateContext.Provider>
    )
}

// export default BoilerplateContext
// export {BoilerplateContextProvider}