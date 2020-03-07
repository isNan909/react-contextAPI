export default (state, action) => {
    switch (action.type) {
        case 'REMOVE_EMPLOYEE':
            return {
                ...state,
                employees: state.employees.filter(employee => employee.id !== action.payload)
            };
        case 'ADD_EMPLOYEE':
            return {
                ...state,
                employees: [...state.employees, action.payload]
            }
        default: return state;
    }
}