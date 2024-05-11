import React from 'react';
import { View, Text, Image, Button, StyleSheet } from 'react-native';

function LandingPage ({navigation}) => {
  return (
    <View style={styles.container}>
      <Image source={require('./../../assets/icon.png')} style={styles.icon} />
      <Text style={styles.appName}>ProsePro</Text>
      <View style={styles.buttonContainer}>
        <Button title="Login" style={styles.loginButton} />
        <Button title="Sign Up" style={styles.signupButton} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#212529',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  icon: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginTop: 25,
    marginBottom: 85,
  },
  appName: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 20,
  },
  buttonContainer: {
    width: '100%',
    flexDirection: 'column',
  },
  loginButton: {
    backgroundColor: '#3498db',
    borderRadius: 5,
    fontSize: 16,
    padding: 10,
    marginBottom: 10,
  },
  signupButton: {
    backgroundColor: '#e74c3c',
    borderRadius: 5,
    fontSize: 16,
    padding: 10,
  },
});

export default LandingPage;
