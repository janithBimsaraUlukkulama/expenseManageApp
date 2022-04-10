import { Text } from 'react-native';
import ExpensessOutput from '../components/ExpensesOutput';
import {ExpensesContext} from "../store/expenses-context";
import {getDateMinusDays} from "../util/date";
import {useContext} from "react";

function RecentExpensess() {
    const expensesContext = useContext(ExpensesContext);

    const recentExpenses = expensesContext.expenses.filter((expense)=>{
        const today = new Date();
        const date7DaysAgo = getDateMinusDays(today,7);

        return expense.date>date7DaysAgo;
    })

    return <ExpensessOutput expenses={recentExpenses} expencespPeriod="Last 7 Days"/>
}

export default RecentExpensess;
