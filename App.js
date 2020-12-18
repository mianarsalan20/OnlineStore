import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { Text, View, StyleSheet, Button, TouchableOpacity,Navigation,NavigatorIOS, } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();
import homeScreen from './components/homeScreen';
import ManageProducts from './components/ManageProducts.js';
import ManageEmployees from './components/ManageEmployees.js';
import ManageOrders from './components/ManageOrders.js';
import ProductsDetails from './components/ProductsDetails.js';
import EmployeesDetails from './components/EmployeesDetails.js';
import OrdersDetails from './components/OrdersDetails.js';



export default function App({navigation}){
  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name="Home" component={homeScreen} />
        <Stack.Screen name="ManageProducts" component={ManageProducts} />
        <Stack.Screen name="ManageEmployees" component={ManageEmployees} />
        <Stack.Screen name="ManageOrders" component={ManageOrders} />
        <Stack.Screen name="ProductsDetails" component={ProductsDetails} />
        <Stack.Screen name="EmployeesDetails" component={EmployeesDetails} />
        <Stack.Screen name="OrdersDetails" component={OrdersDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
