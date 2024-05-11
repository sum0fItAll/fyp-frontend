import React, { useState } from 'react';
import { View, Alert, KeyboardAvoidingView, Platform, StyleSheet } from 'react-native';
import { Button, IconButton, Title, Paragraph, TextInput, Provider as PaperProvider, DefaultTheme, useTheme } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { login } from '../auth/auth';
import CustomActivityIndicator from '../components/ActivityIndicator';

// const theme = {
//   ...DefaultTheme,
//   colors: {
//     ...DefaultTheme.colors,
//     primary: 'dodgerblue',
//     accent: 'dodgerblue',
//   },
// };

const LoginPageSecond: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const theme = useTheme();

    const handleLogin = async () => {
        try {
            setLoading(true);
            // Wait for the login to complete
            await login(email, password);
        } catch (error) {
            // Handle any errors here
            // Alert.alert("Login Failed", "An error occurred during login. Please try again.");
            console.error(error);
        } finally {
            await new Promise(resolve => setTimeout(resolve, 1000));
            // Stop the loading indicator
            setLoading(false);
        }
    };

  return (
    // <PaperProvider theme={theme}>
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
          {/* <View style={{marginBottom}}> */}
            <TextInput
                mode="outlined"
                placeholder="Enter your email"
                keyboardType="email-address"
                autoCapitalize="none"
                onChangeText={setEmail}
                value={email}
                style={{marginBottom: 20}}
            />
          {/* </View> */}
          <Paragraph style={styles.label}>Password</Paragraph>
          <TextInput
            mode="outlined"
            placeholder="Enter your password"
            secureTextEntry={true}
            onChangeText={setPassword}
            value={password}
          />
          <Button mode="text" onPress={() => { /* Handle Forgot Password */ }} style={{marginBottom: 20,marginTop: 5,  alignSelf: 'flex-end'}}>
            Forgot Password?
          </Button>
          <Button mode="contained" disabled={loading} onPress={handleLogin}
            style={{marginVertical: 15}} labelStyle={{fontSize: 16}}>
            Login
          </Button>
          <View style={styles.signupTextContainer}>
            <Paragraph style={styles.signupText}>Don't have an account?</Paragraph>
            <IconButton icon="account-plus" iconColor={theme.colors.onSurface} onPress={() => { /* Handle Signup navigation */ }} />
          </View>
        </View>
      </KeyboardAvoidingView>
    // </PaperProvider>
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
  signupTextContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  signupText: {
    fontSize: 14,
    marginRight: 10,
  },
});

export default LoginPageSecond;
