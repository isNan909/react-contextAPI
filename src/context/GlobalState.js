import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer'

const initialState = {
    employees: [
        { id: 1, name: 'John Doe', location: 'California', designation: 'Product Designer' },
        { id: 2, name: 'Alfred Hanball', location: 'Warsaw', designation: 'Frontend Engineer' },
        { id: 3, name: 'Ishan Manandhar', location: 'Kathmandu', designation: 'Fullstack Dev' }
    ]
}

export const GlobalContext = createContext(initialState);
export const GlobalProvider = ({ children }) => {
    const [state] = useReducer(AppReducer, initialState);
    return (<GlobalContext.Provider value={{
        employees: state.employees,
    }}>
        {children}
    </GlobalContext.Provider>);
}