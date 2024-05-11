// Profile Page, should have a center aligned text that says "Profile Page" and a button that says "Logout", and a center profile image that is 100x100 pixels. and other profile information.

import React from 'react';
import { View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Avatar, List, Text } from 'react-native-paper';
import CurrencyIcon from '../components/CurrencyIcon';
// import { useTranslation } from "react-i18next";
// import { useUserStore } from "../stores/user";

export default function ProfilePage({ navigation }) {
    //   const user = useUserStore(({ user }) => user);
    //   const { t } = useTranslation();
    return (
        <ScrollView style={{ padding: 10 }}>
            <View
                style={{
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                    paddingVertical: 15,
                }}>
                {/* <Avatar.Text size={48} label={user.name.slice(0, 2).toUpperCase()} /> */}
                <Avatar.Text size={48} label={'ahsan faizan'.toUpperCase()} />
                <Text
                    style={{
                        marginLeft: 10,
                        fontSize: 30,
                        fontWeight: 'bold',
                    }}>
                    {/* {user.name} */}
                    {'ahsan faizan'}
                </Text>
            </View>
            <List.Section title={'info'}>
                <List.Item
                    title={'region'}
                    description={`regions.${'region'}`}
                    // description={t(`regions.${user.region}`)}
                    left={props => <List.Icon {...props} icon="earth" />}
                />
            </List.Section>
            <List.Section title={'progress'}>
                <List.Item
                    title={'level'}
                    // description={user.progress.level}
                    description={'1/2'}
                    left={props => (
                        <List.Icon {...props} icon="chevron-triple-up" />
                    )}
                />
                <List.Item
                    title={'xp'}
                    // description={user.progress.xp}
                    description={'1000/2000'}
                    left={props => (
                        <List.Icon {...props} icon="chevron-triple-up" />
                    )}
                />
            </List.Section>
            <List.Section title={'balances'}>
                <List.Item
                    title={'vp'}
                    description={'1000'}
                    descriptionNumberOfLines={1}
                    left={props => <CurrencyIcon {...props} icon="vp" paper />}
                />
                <List.Item
                    title={'rad'}
                    description={'1000'}
                    descriptionNumberOfLines={1}
                    left={props => <CurrencyIcon {...props} icon="rad" paper />}
                />
                <List.Item
                    title={'fag'}
                    description={'something'}
                    descriptionNumberOfLines={1}
                    left={props => (
                        <List.Icon {...props} icon="account-supervisor" />
                    )}
                />
            </List.Section>
        </ScrollView>
    );
}
