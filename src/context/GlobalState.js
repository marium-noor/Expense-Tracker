import React from 'react'
import { createContext } from 'react'
import { useReducer } from 'react'
import AppReducer from './AppReducer'
import { GlobalProvider } from './GlobalProvider'

// Initial state
const initialState = {
    transactions: []
}

// Global state
const GlobalContext = createContext(initialState)

export { GlobalContext, initialState };

//Provider
// export const GlobalProvider = ({ children }) => {
//     const [state, dispatch] = useReducer(AppReducer, initialState)

//     return (
//         <GlobalContext.Provider value={
//             {transactions: state.transactions}
//         }>
//             {children}
//         </GlobalContext.Provider>
//     )

// }
