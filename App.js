import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, Text, View } from 'react-native';

import { GlobalStyles } from './constants/styles';
import AllExpensess from './screens/AllExpenses';
import ManageExpensess from './screens/ManageExpensess';
import RecentExpensess from './screens/RecentExpenses';
import IconButton from './components/UI/IconButton';

const Stack = createNativeStackNavigator();
const BottomTabs = createBottomTabNavigator();

function ExpensessOverview() {
  return (
    <BottomTabs.Navigator screenOptions={{
      headerStyle: { backgroundColor: GlobalStyles.colors.primary500 },
      headerTintColor: 'white',
      tabBarStyle: { backgroundColor: GlobalStyles.colors.primary500 },
      tabBarActiveTintColor: GlobalStyles.colors.accent500,
      headerRight: ({ tintColor }) => (<IconButton icon="add" size={24} color={tintColor} onPress={() => { }} />)
    }} >

      <BottomTabs.Screen
        name="RecentExpensess"
        component={RecentExpensess}
        options={{
          title: 'Recent Expensess',
          tabBarLabel: 'Recent',
          tabBarIcon: ({ color, size }) => <Ionicons name='hourglass' size={size} color={color} />
        }} />
      <BottomTabs.Screen
        name="AllExpensess"
        component={AllExpensess}
        options={{
          title: 'All Expensess',
          tabBarLabel: 'All',
          tabBarIcon: ({ color, size }) => <Ionicons name='calendar' size={size} color={color} />

        }} />

    </BottomTabs.Navigator>
  )
}

export default function App() {
  return (
    <>
      <StatusBar style="auto" />

      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name='ExpensessOverView' component={ExpensessOverview} options={{ headerShown: false }} />
          <Stack.Screen name='ManageExpensess' component={ManageExpensess} />
        </Stack.Navigator>
      </NavigationContainer>

    </>
  );
}

