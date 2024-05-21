import React from 'react'
import { useReducer } from 'react'
import AppReducer from './AppReducer'
import { initialState } from './GlobalState'
import { GlobalContext } from './GlobalState'


export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState)

     function deleteTransaction(id) {
        dispatch({
            type: 'DELETE_TRANSACTION',
            payload: id
        })
    }

    function addTransaction(transaction) {
        dispatch({
            type: 'ADD_TRANSACTION',
            payload: transaction
        })
    }
    return (
        <GlobalContext.Provider value={{
                transactions: state.transactions,
                deleteTransaction,
                addTransaction
            }}>
            {children}
        </GlobalContext.Provider>
    )
}