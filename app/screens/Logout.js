import React, { useState } from 'react';
import { Text, StyleSheet, View, TextInput, Button, Alert } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { AuthContext } from '../context';

const ScreenContainer = ({ children }) => (
  <View style={styles.container}>{children}</View>
);

export const Logout = ({ navigation }) => {
  const { signOut } = React.useContext(AuthContext);
  const [value, setValue] = useState(0);
  return (
    <ScreenContainer style={styles.container}>
      <View>
        <Text style={styles.confirmationText}>
          {'\n'}
          {'\n'}
        </Text>
        <Text style={styles.descriptiveText}></Text>
      </View>

      <Text style={styles.bottomButton}>
        <Button title="Logout" onPress={() => signOut()} />
      </Text>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightblue',
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
  },
  bottomButton: {
    display: 'flex',
    flexDirection: 'column',
    color: 'grey',
    position: 'absolute',
    paddingBottom: 10,
    width: 200,
    fontSize: 24,
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
