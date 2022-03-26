import { View, FlatList, StyleSheet } from "react-native";
import { GlobalStyles } from "../constants/styles";
import ExpensesList from "./ExpensesList";

import ExpensesSummary from "./ExpensesSummery";

const DUMMY_EXPENSES = [
    { id: 'e1', description: 'description1', amount: 1.99, date: new Date('2022-02-01') },
    { id: 'e2', description: 'description2', amount: 2.49, date: new Date('2022-02-02') },
    { id: 'e3', description: 'description3', amount: 5.00, date: new Date('2022-02-03') },
    { id: 'e4', description: 'description4', amount: 9.00, date: new Date('2022-02-04') },
    { id: 'e5', description: 'description5', amount: 9.99, date: new Date('2022-02-05') }
]

function ExpensessOutput({ expenses, expencespPeriod }) {
    return (
        <View style={styles.container}>
            {/* <ExpensesSummary expenses={expenses} periodName={expencespPeriod} /> */}
            <ExpensesSummary expenses={DUMMY_EXPENSES} periodName={expencespPeriod} />
            <ExpensesList expenses={DUMMY_EXPENSES} />
        </View>

    );
};

export default ExpensessOutput;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
        backgroundColor: GlobalStyles.colors.primary700,
        paddingHorizontal: 24,
        paddingTop: 24,
        paddingBottom: 0
    }
})