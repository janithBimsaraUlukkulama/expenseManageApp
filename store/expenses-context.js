import {createContext, useReducer} from "react";

const DUMMY_EXPENSES = [
    {id: 'e1', description: 'description1', amount: 1.99, date: new Date('2022-02-01')},
    {id: 'e2', description: 'description2', amount: 2.49, date: new Date('2022-02-02')},
    {id: 'e3', description: 'description3', amount: 5.00, date: new Date('2022-02-03')},
    {id: 'e4', description: 'description4', amount: 9.00, date: new Date('2022-02-04')},
    {id: 'e5', description: 'description5', amount: 9.99, date: new Date('2022-02-05')}
];

export const ExpensesContext = createContext({
    expenses: [],
    addExpenses: ({description, amount, date}) => {
    },
    deleteExpense: (id) => {
    },
    updateExpenses: (id, {description, amount, date}) => {
    }
});

function expensesReducer(state, action) {
    switch (action.type) {
        case 'ADD':
            const id = new Date().toString() + Math.random().toString();
            return [{...action.payload, id: id}, ...state];

        case 'DELETE':
            return state.filter((expense) => expense.id !== action.payload);

        case 'UPDATE':
            const updatableExpenseIndex = state.findIndex((expense) => expense.id === action.payload.id);
            const updatableExpense = state[updatableExpenseIndex];
            const updateItem = {...updatableExpense, ...action.payload.data}
            const updatedExpenses = [...state];
            updatedExpenses[updatableExpenseIndex] = updateItem;
            return updatedExpenses;

        default:
            return state;
    }
}

function ExpensesContextProvider({children}) {
    const [expensesState, dispatch] = useReducer(expensesReducer, DUMMY_EXPENSES);

    function addExpenses(expenseData) {
        dispatch({type: 'ADD', payload: expenseData});
    }

    function deleteExpense(id) {
        dispatch({type: 'DELETE', payload: id});
    }

    function updateExpenses(id, expenseData) {
        dispatch({type: 'UPDATE', payload: {id: id, data: expenseData}});
    }

    const value = {
        expenses: expensesState,
        addExpenses: addExpenses,
        deleteExpense: deleteExpense,
        updateExpenses: updateExpenses
    }

    return <ExpensesContext.Provider value={value}>
        {children}
    </ExpensesContext.Provider>
}

export default ExpensesContextProvider;
