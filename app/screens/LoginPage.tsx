import React, { useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Button, Input } from 'react-native-elements';
// import { supabase } from '../auth/supabaseClient';
import { login, signUp } from '../auth/auth';
import { ActivityIndicatorComponent } from 'react-native';

const LoginPage = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);

    return (
        <View style={styles.container}>
        <View style={[styles.verticallySpaced, styles.mt20]}>
            <Input
            label="Email"
            leftIcon={{ type: 'font-awesome', name: 'envelope' }}
            onChangeText={(text) => setEmail(text)}
            value={email}
            placeholder="email@address.com"
            autoCapitalize={'none'}
            />
        </View>
        <View style={styles.verticallySpaced}>
            <Input
            label="Password"
            leftIcon={{ type: 'font-awesome', name: 'lock' }}
            onChangeText={(text) => setPassword(text)}
            value={password}
            secureTextEntry={true}
            placeholder="Password"
            autoCapitalize={'none'}
            />
        </View>
        <View style={[styles.verticallySpaced, styles.mt20]}>
            <Button title="Sign in" disabled={loading} onPress={() => login(email, password)} />
        </View>
        <View style={styles.verticallySpaced}>
            <Button title="Sign up" disabled={loading} onPress={() => signUp(email, password)} />
        </View>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        marginTop: 40,
        padding: 12,
    },
    verticallySpaced: {
        paddingTop: 4,
        paddingBottom: 4,
        alignSelf: 'stretch',
    },
    mt20: {
        marginTop: 20,
    },
});

export default LoginPage;
