import React, { useState } from 'react';
import { View, KeyboardAvoidingView, Platform, StyleSheet } from 'react-native';
import { Button, IconButton, Title, Paragraph, TextInput } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const SignUpPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSignUp = () => {
    // Implement sign up logic using email and password
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      <View style={styles.header}>
        <Icon name="book-open-page-variant" size={80} style={{marginBottom: 20}}/>
        <Title style={styles.headerTitle}>ProsePro</Title>
      </View>
      <View style={styles.formContainer}>
        <Paragraph style={styles.label}>Email</Paragraph>
        <TextInput
          mode="outlined"
          placeholder="Enter your email"
          keyboardType="email-address"
          autoCapitalize="none"
          onChangeText={setEmail}
          value={email}
          style={{marginBottom: 20}}
        />
        <Paragraph style={styles.label}>Password</Paragraph>
        <TextInput
          mode="outlined"
          placeholder="Enter your password"
          secureTextEntry={true}
          onChangeText={setPassword}
          value={password}
          style={{marginBottom: 20}}
        />
        <Paragraph style={styles.label}>Confirm Password</Paragraph>
        <TextInput
          mode="outlined"
          placeholder="Confirm your password"
          secureTextEntry={true}
          onChangeText={setConfirmPassword}
          value={confirmPassword}
        />
        <Button mode="contained" onPress={handleSignUp} style={{marginVertical: 15}}>
          Sign Up
        </Button>
        <View style={styles.loginTextContainer}>
          <Paragraph style={styles.loginText}>Already have an account?</Paragraph>
          <IconButton icon="login" onPress={() => { /* Handle Login navigation */ }} />
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  header: {
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 40,
  },
  headerTitle: {
    fontSize: 32,
    fontWeight: 'bold',
  },
  formContainer: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
  },
  loginTextContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  loginText: {
    fontSize: 14,
    marginRight: 10,
  },
});

export default SignUpPage;