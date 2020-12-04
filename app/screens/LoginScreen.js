import React, { useState } from 'react';
// import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Text, StyleSheet, View, TextInput, Button } from 'react-native';
import { AuthContext } from '../context';

const ScreenContainer = ({ children }) => (
  <View style={styles.container}>{children}</View>
);

export const Login = ({ navigation }) => {
  const { signIn } = React.useContext(AuthContext);
  const [value, setValue] = useState(0);
  return (
    <ScreenContainer style={styles.container}>
      <Text style={styles.formLabel}></Text>
      <View>
        <TextInput placeholder="Username or Email" style={styles.inputStyle} />
        <TextInput
          secureTextEntry={true}
          placeholder="Password"
          style={styles.lastInputStyle}
        />
      </View>
      <Button
        title="Login"
        onPress={() => signIn()}
        // onPress = {() => this.prop.navigation.navigate("App", {screen: "ShowEventList"})}
        // onPress = {() => navigation.push("")}
      />

      <Text style={styles.bottomButton}>
        New user?
        {'\n'}
        {'\n'}
        <Button title="Sign Up" onPress={() => navigation.push('SignUp')} />
      </Text>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightblue',
    alignItems: 'center',
    justifyContent: 'top',
    paddingTop: 70,
    height: 50,
  },
  bottomButton: {
    display: 'flex',
    flexDirection: 'column',
    color: 'grey',
    position: 'absolute',
    bottom: 0,
    paddingBottom: 20,
  },

  formLabel: {
    paddingTop: 180,
    fontSize: 20,
    color: 'grey',
  },
  inputStyle: {
    marginTop: 20,
    width: 300,
    height: 40,
    paddingHorizontal: 10,
    borderRadius: 50,
    backgroundColor: 'white',
    outline: 'none',
  },
  lastInputStyle: {
    marginTop: 20,
    marginBottom: 20,
    width: 300,
    height: 40,
    paddingHorizontal: 10,
    borderRadius: 50,
    // backgroundColor: #DCDCDC also looked good
    backgroundColor: 'white',
    outline: 'none',
  },
  // formText: {
  //   alignItems: 'center',
  //   justifyContent: 'center',
  //   color: '#fff',
  //   fontSize: 20,
  // },
  // text: {
  //   color: '#fff',
  //   fontSize: 20,
  // },
});

// export default LoginScreen;
