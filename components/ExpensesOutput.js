import { View, FlatList, StyleSheet } from "react-native";
import { GlobalStyles } from "../constants/styles";
import ExpensesList from "./ExpensesList";

import ExpensesSummary from "./ExpensesSummery";

function ExpensessOutput({ expenses, expensesPeriod }) {
    return (
        <View style={styles.container}>
            <ExpensesSummary expenses={expenses} periodName={expensesPeriod} />
            <ExpensesList expenses={expenses} />
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
