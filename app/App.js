import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// Auth Screens
import { Login } from './screens/LoginScreen';
import { SignUp } from './screens/SignUpScreen';
import { SuccessfulSignUp } from './screens/SuccessfulSignUpScreen';
// Main Application Screens
import { EventList } from './screens/EventListScreen';
import { CreateEvent } from './screens/CreateEventScreen';
import { MyEvents } from './screens/MyEvents';
import { SuccessfulEventCreation } from './screens/SuccessfulEventCreationScreen';
import { Splash } from './screens/Splash';
import { AuthContext } from './context';
import { Logout } from './screens/Logout';

const AuthStack = createStackNavigator();
const Tabs = createBottomTabNavigator();
// CreateStack will contain CreateEvents & SuccessfulEventCreation
const CreateStack = createStackNavigator();

// Stacks
const CreateStackScreen = () => (
  <CreateStack.Navigator>
    <CreateStack.Screen
      name="CreateEvent"
      component={CreateEvent}
      options={{ title: 'Create Event' }}
    />
    <CreateStack.Screen
      name="SuccessfulEventCreation"
      component={SuccessfulEventCreation}
    />
  </CreateStack.Navigator>
);

const TabsScreen = () => (
  <Tabs.Navigator>
    <Tabs.Screen name="Event List" component={EventList} />
    <Tabs.Screen name="Create Event" component={CreateStackScreen} />
    <Tabs.Screen name="Logout" component={Logout} />
  </Tabs.Navigator>
);

const AuthStackScreen = () => (
  <AuthStack.Navigator>
    <AuthStack.Screen
      name="Login"
      component={Login}
      options={{ title: 'Login' }}
    />
    <AuthStack.Screen
      name="SignUp"
      component={SignUp}
      options={{ title: 'Sign Up' }}
    />
    <AuthStack.Screen
      name="SuccessfulSignUp"
      component={SuccessfulSignUp}
      options={{ title: 'Sign Up Successful' }}
    />
  </AuthStack.Navigator>
);

export default () => {
  const [isLoading, setIsLoading] = React.useState(true);
  const [userToken, setUserToken] = React.useState(null);

  const authContext = React.useMemo(() => {
    return {
      signIn: () => {
        setIsLoading(false);
        setUserToken('abc');
      },
      signUp: () => {
        setIsLoading(false);
        setUserToken('abc');
      },
      signOut: () => {
        setIsLoading(false);
        setUserToken(null);
      },
    };
  }, []);

  React.useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  if (isLoading) {
    return <Splash />;
  }

  return (
    <AuthContext.Provider value={authContext}>
      <NavigationContainer>
        {userToken ? <TabsScreen /> : <AuthStackScreen />}
      </NavigationContainer>
    </AuthContext.Provider>
  );
};
