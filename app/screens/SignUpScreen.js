import React, { useState } from 'react';
import { Text, StyleSheet, View, TextInput, Button, Alert } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
// import LoginScreen from './screens/LoginScreen';

const ScreenContainer = ({ children }) => (
  <View style={styles.container}>{children}</View>
);

export const SignUp = ({ navigation }) => {
  const [value, setValue] = useState(0);
  return (
    <ScreenContainer style={styles.container}>
      <Text style={styles.formLabel}></Text>
      <View>
        <TextInput placeholder="Fullname" style={styles.inputStyle} />
        <TextInput placeholder="Username" style={styles.inputStyle} />
        <TextInput placeholder="Email" style={styles.inputStyle} />
        <TextInput
          secureTextEntry={true}
          placeholder="Password"
          style={styles.inputStyle}
        />
        <TextInput
          secureTextEntry={true}
          placeholder="Confirm Password"
          style={styles.lastInputStyle}
        />
      </View>
      <Button
        title="Create Account"
        onPress={() => navigation.navigate('SuccessfulSignUp')}
      />

      <Text style={styles.bottomButton}>
        Already have an account?
        {'\n'}
        {'\n'}
        <Button title="Login" onPress={() => navigation.navigate('Login')} />
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
    paddingTop: 150,
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
});

// export default Signup;
