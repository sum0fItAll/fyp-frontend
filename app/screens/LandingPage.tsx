import React from 'react';
import { View, Text, Button } from 'react-native';

const LandingPage = ({ navigation }) => {
    return (
        <View>
            <Text>This is the Landing Page</Text>
            <Button
                title="Login"
                onPress={() => navigation.navigate('Login')}
            />
            <Button
                title="Sign Up"
                onPress={() => navigation.navigate('SignUp')}
            />
        </View>
    );
};

export default LandingPage;
