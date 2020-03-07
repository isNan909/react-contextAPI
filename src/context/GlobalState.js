import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer'

const initialState = {
    employees: [
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

    function addEmployee(employee) {
        dispatch({
            type: 'ADD_EMPLOYEES',
            payload: employee
        });
    }
    return (<GlobalContext.Provider value={{
        employees: state.employees,
        removeEmployee,
        addEmployee
    }}>
        {children}
    </GlobalContext.Provider>);
}