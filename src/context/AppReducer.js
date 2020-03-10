export default (state, action) => {
    switch (action.type) {
        case 'REMOVE_EMPLOYEE':
            return {
                ...state,
                employees: state.employees.filter(employee => employee.id !== action.payload)
            };
        case 'ADD_EMPLOYEES':
            return {
                ...state,
                employees: [action.payload, ...state.employees]
            };
        case 'EDIT_EMPLOYEE':
            return {
                ...state,
                employees: state.employees.filter(employee => employee.id !== action.payload)
            };
        default: return state;
    }
}