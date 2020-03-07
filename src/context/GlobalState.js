import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer'

const initialState = {
    employees: [
        { id: 1, name: 'John Doe', location: 'California', designation: 'Product Designer' },
        { id: 2, name: 'Alfred Hanball', location: 'Warsaw', designation: 'Frontend Engineer' },
        { id: 3, name: 'Ishan Manandhar', location: 'Kathmandu', designation: 'Frontend Dev' }
    ]
}

export const GlobalContext = createContext(initialState);
export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    function removeEmployee(id) {
        dispatch({
            type: 'REMOVE_EMPLOYEE',
            payload: id
        });
    }
    return (<GlobalContext.Provider value={{
        employees: state.employees,
        removeEmployee
    }}>
        {children}
    </GlobalContext.Provider>);
}