// import * as React from 'react';
// import { StyleSheet, Text, View, Image, Button } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import { createDrawerNavigator } from '@react-navigation/drawer';
// import { createStackNavigator } from '@react-navigation/stack';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// import ShowEventList from './screens/EventListScreen';
// import CreateEvent from './screens/CreateEventScreen';
// import SignUpScreen from './screens/SignUpScreen';
// import LoginScreen from './screens/LoginScreen';
// import SuccessfulSignUpScreen from './screens/SuccessfulSignUpScreen';
// import SuccessfulEventCreationScreen from './screens/SuccessfulEventCreationScreen';

// const Stack = createStackNavigator();
// const Tab = createBottomTabNavigator();

// function Authentication() {
//   return (
//     <Stack.Navigator>
//       <Stack.Screen name="Log In" component={LoginScreen} />
//       <Stack.Screen name="Sign Up" component={SignUpScreen} />
//       <Stack.Screen name="Sucessful Sign Up" component={SuccessfulSignUpScreen} />
//     </Stack.Navigator>
//   );
// }

// export default function App() {
//   return (
//     <NavigationContainer>
//       <Tab.Navigator>
//         <Tab.Screen name="Authentication" component={Authentication} />
//         <Tab.Screen name="Sucessful Event" component={SuccessfulEventCreationScreen} />
//         <Tab.Screen name="Event Calendar" component={ShowEventCalendar} />
//         <Tab.Screen name="Event List" component={ShowEventList} />
//         <Tab.Screen name="Create Event" component={CreateEvent} />
//       </Tab.Navigator>
//     </NavigationContainer>
//   );
// }
