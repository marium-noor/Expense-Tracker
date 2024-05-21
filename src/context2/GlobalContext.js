import React, {createContext} from "react";

const initialState = {
    transactions: []
}

export const globalContext = createContext(initialState)