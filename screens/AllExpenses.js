import {Text} from 'react-native';
import ExpensessOutput from '../components/ExpensesOutput';
import {ExpensesContext} from "../store/expenses-context";
import {useContext} from "react";

function AllExpensess() {
    const expensesContext = useContext(ExpensesContext);

    return <ExpensessOutput expenses={expensesContext.expenses} expencespPeriod='Total'/>
}

export default AllExpensess;
