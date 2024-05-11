import React, { useState } from 'react';
import { View, Alert, KeyboardAvoidingView, Platform, StyleSheet } from 'react-native';
import { Button, IconButton, Title, Paragraph, TextInput, Provider as PaperProvider, DefaultTheme, useTheme } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { signUp } from '../auth/auth'; // Make sure to implement this function
import CustomActivityIndicator from '../components/ActivityIndicator';

const SignupPage: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const theme = useTheme();

    const handleSignup = async () => {
        if (password !== confirmPassword) {
            Alert.alert("Passwords do not match", "Please ensure your passwords match.");
            return;
        }

        try {
            setLoading(true);
            await signUp(email, password);
        } catch (error) {
            console.error(error);
        } finally {
            await new Promise(resolve => setTimeout(resolve, 1000));
            setLoading(false);
        }
    };

  return (
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.container}
      >
        <CustomActivityIndicator visible={loading} theme={theme} />
        <View style={styles.header}>
            <Icon name="book-open-page-variant" color={theme.colors.onSurface} size={80} style={{marginBottom: 20}}/>
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
                style={{marginBottom: 15}}
            />
          <Paragraph style={styles.label}>Password</Paragraph>
          <TextInput
            mode="outlined"
            placeholder="Enter your password"
            secureTextEntry={true}
            onChangeText={setPassword}
            value={password}
            style={{marginBottom: 15}}
          />
          <Paragraph style={styles.label}>Confirm Password</Paragraph>
          <TextInput
            mode="outlined"
            placeholder="Confirm your password"
            secureTextEntry={true}
            onChangeText={setConfirmPassword}
            value={confirmPassword}
            style={{marginBottom: 15}}
          />
          <Button mode="contained" disabled={loading} onPress={handleSignup}
            style={{marginVertical: 15}} labelStyle={{fontSize: 16}}>
            Sign Up
          </Button>
          <View style={styles.signupTextContainer}>
            <Paragraph style={styles.signupText}>Already have an account?</Paragraph>
            <IconButton icon="account-plus" iconColor={theme.colors.onSurface} onPress={() => { /* Handle Login navigation */ }} />
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
    marginTop: 10,
    marginBottom: 10,
  },
  headerTitle: {
    fontSize: 32,
    fontWeight: 'bold',
  },
  formContainer: {
    marginBottom: 10,
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
  },
  signupTextContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  signupText: {
    fontSize: 14,
    marginHorizontal: 10,
  },
});

export default SignupPage;