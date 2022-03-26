import { Pressable, View, Text, StyleSheet } from "react-native";
import { GlobalStyles } from "../constants/styles";
import { getFormattedData } from "../util/date";

function ExpenseItem({ description, amount, date }) {
    return (
        <Pressable >
            <View style={styles.expenseItem}>
                <View >
                    <Text style={[styles.textBase, styles.descriptionText]}>{description}</Text>
                    <Text style={styles.textBase}>{getFormattedData(date)}</Text>
                </View>
                <View style={styles.amountContainer}>
                    <Text style={styles.amount}>{amount.toFixed(2)}</Text>
                </View>
            </View>
        </Pressable>
    )
};

export default ExpenseItem;

const styles = StyleSheet.create({
    expenseItem: {
        padding: 12,
        margin: 8,
        backgroundColor: GlobalStyles.colors.primary500,
        flexDirection: 'row',
        justifyContent: 'space-between',
        elevation: 3,
        shadowColor: GlobalStyles.colors.gray500,
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity: 0.4
    },
    textBase: {
        color: GlobalStyles.colors.primary50
    },
    descriptionText: {
        fontSize: 16,
        marginBottom: 4,
        fontWeight: 'bold'
    },
    amountContainer: {
        paddingHorizontal: 12,
        paddingVertical: 4,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 4,
        minWidth: 80
    },
    amount: {
        color: GlobalStyles.colors.primary500,
        fontWeight: 'bold'
    }
})