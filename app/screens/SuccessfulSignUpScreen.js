import React, { useState } from 'react';
import { Text, StyleSheet, View, TextInput, Button, Alert } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

const ScreenContainer = ({ children }) => (
  <View style={styles.container}>{children}</View>
);

export const SuccessfulSignUp = ({ navigation }) => {
  const [value, setValue] = useState(0);
  return (
    <ScreenContainer style={styles.container}>
      <Ionicons
        name="md-checkmark-circle"
        size={200}
        color="#169af2"
        backgroundColor="w"
      />
      <View>
        <Text style={styles.confirmationText}>
          Account Created Sucessfully
          {'\n'}
          {'\n'}
        </Text>
        <Text style={styles.descriptiveText}>
          You can start using the application now!
        </Text>
      </View>

      <Text style={styles.bottomButton}>
        <Button
          title="Continue to Login"
          onPress={() => navigation.navigate('Login')}
        />
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
    paddingTop: 180,
    height: 50,
  },
  bottomButton: {
    display: 'flex',
    flexDirection: 'column',
    color: 'grey',
    position: 'absolute',
    bottom: 0,
    paddingBottom: 10,
  },

  formLabel: {
    fontSize: 20,
    color: 'grey',
  },
  confirmationText: {
    alignItems: 'center',
    fontSize: 20,
  },
  descriptiveText: {
    color: 'grey',
    fontSize: 14,
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
