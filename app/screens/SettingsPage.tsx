import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button, List, Divider, useTheme } from 'react-native-paper';

type SettingsItem = {
    title: string;
    onPress: () => void;
};

type SettingsSection = {
    title: string;
    items: SettingsItem[];
};

type SettingsPageProps = {
    navigation: any;
};

const SettingsPage: React.FC<SettingsPageProps> = ({ navigation }) => {
    const { colors } = useTheme();

    const settingsSections: SettingsSection[] = [
        {
            title: 'App Settings',
            items: [
                {
                    title: 'Notification Settings',
                    onPress: () => navigation.navigate('NotificationSettings'),
                },
                {
                    title: 'Language',
                    onPress: () => navigation.navigate('LanguageSettings'),
                },
            ],
        },
        {
            title: 'Payment Settings',
            items: [
                {
                    title: 'Payment Method',
                    onPress: () => navigation.navigate('PaymentMethod'),
                },
                {
                    title: 'Billing Information',
                    onPress: () => navigation.navigate('BillingInformation'),
                },
            ],
        },
    ];

    const renderSettingSection = (section: SettingsSection) => (
        <>
            <List.Section>
                <List.Subheader style={{ color: colors.primary }}>
                    {section.title}
                </List.Subheader>
                    {section.items.map((item) => (
                        <List.Item key={item.title} title={item.title} onPress={item.onPress} titleStyle={{ color: colors.text }} />
                    ))}
            </List.Section>
        <Divider />
        </>
    );

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Settings</Text>
            {settingsSections.map(renderSettingSection)}
            <Button
                style={styles.button}
                mode="contained"
                onPress={() => navigation.navigate('Profile')}
                // contentStyle={{ backgroundColor: colors.primary }}
                // labelStyle={{ color: colors.onPrimary }}
                buttonColor={colors.primary}
                textColor={colors.onPrimary}
                labelStyle={{fontSize: 16}}
            >
                Profile
            </Button>
            <Button
                style={styles.button}
                mode="contained"
                onPress={() => navigation.navigate('Profile')}
                // contentStyle={{ backgroundColor: colors.primary }}
                // labelStyle={{ color: colors.onPrimary }}
                buttonColor={colors.primary}
                textColor={colors.onPrimary}
                labelStyle={{fontSize: 16}}
            >
                Home
            </Button>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
    },
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    button: {
        marginTop: 10,
        marginHorizontal: 10,
        width: 180,
        alignSelf: 'center',
        justifyContent: 'center',
        padding: 5,
    },
});

export default SettingsPage;
