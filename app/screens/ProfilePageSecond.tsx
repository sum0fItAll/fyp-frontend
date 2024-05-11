import React, { useEffect } from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import {
    Avatar,
    Title,
    Caption,
    Paragraph,
    List,
    Divider,
    Text,
    Button,
    IconButton,
    useTheme,
} from 'react-native-paper';

import { logout } from '../auth/auth';
import { useNavigation } from '@react-navigation/native';
import { useAppSelector } from '../hooks/dispatch_hook';
import { RootState } from '../state/store';

interface User {
    name: string;
    avatarUrl: string;
    bio?: string; // Optional bio
    about: string;
}

interface Stat {
    [key: string]: string; // Stat name as key, stat value as string
}

interface ProfilePageProps {
    user: User;
    navigation: any;
    onEditPress?: () => void; // Optional edit press handler
    stats?: Stat; // Optional stats object
}

const ProfilePage2: React.FC<ProfilePageProps> = ({
    user,
    navigation,
    onEditPress,
    stats,
}) => {
    const { colors } = useTheme();
    // Sample statistics (modify as needed)
    const defaultStats: Stat = {
        'Books Read': '123',
        'Avg. Reading Time': '30 min',
        'Favorite Genre': 'Sci-Fi',
    };

    // const user = useAppSelector((state: RootState) => state.auth.user);
    // const isLoggedIn = user !== null;
    // const navigation = useNavigation();

    // useEffect(() => {
    //     if (!isLoggedIn) {
    //         navigation.reset({
    //             index: 0,
    //             routes: [{ name: 'Landing' }],
    //         });
    //     }
    // }, [user, navigation, isLoggedIn]);

    // useEffect(() => {
    //     if (!user) {
    //         navigation.reset({
    //             index: 0,
    //             routes: [{ name: 'Landing' }],
    //         });
    //     }
    // }, [user, navigation]);
    const handleLogout = async () => {
        try {
            await logout(); // Call the logout function
            // Reset the navigation state and navigate to the Landing Screen
            navigation.reset({
                index: 0,
                routes: [{ name: 'Landing' }],
            });
        } catch (error) {
            // Handle any errors that occur during logout
            console.error('Error logging out:', errorr.message);
        }
    };

    return (
        <ScrollView
            style={[styles.container, { backgroundColor: colors.background }]}>
            <View style={styles.header}>
                <Avatar.Image
                    size={100}
                    source={require('./../../assets/aspect_ratio_large.png')}
                />
                <View style={styles.userInfo}>
                    <Title style={styles.title}>{'Ahsan Faizan'}</Title>
                    {'spmething' && <Caption>{'Reader'}</Caption>}
                </View>
                {onEditPress && (
                    <IconButton
                        icon="edit"
                        size={24}
                        onPress={onEditPress}
                        style={styles.editButton}
                    />
                )}
            </View>
            <Divider style={{backgroundColor: colors.primary, borderWidth: 0.15,  borderColor: colors.onPrimary}}/>
            <View style={styles.statsSection}>
                <Title style={styles.title}>Reading Stats</Title>
                  <List.Section style={styles.listSection}>
                    {stats
                        ? Object.entries(stats).map(([statName, statValue]) => (
                              <List.Item
                                  key={statName}
                                  title={statName}
                                  description={statValue}
                                  titleStyle={styles.listItemTitle}
                                  descriptionStyle={styles.listItemDescription}
                              />
                          ))
                        : Object.entries(defaultStats).map(
                              ([statName, statValue]) => (
                                  <List.Item
                                      key={statName}
                                      title={statName}
                                      description={statValue}
                                      titleStyle={styles.listItemTitle}
                                      descriptionStyle={styles.listItemDescription}
                                  />
                              ),
                          )}
                </List.Section>
            </View>
            <View style={styles.buttonContainer}>
                <Button
                    mode="contained"
                    onPress={
                        onEditPress ||
                        (() => console.log('Edit Profile Pressed'))
                    }
                    style={[styles.button, { backgroundColor: colors.primary }]}
                    color={colors.surface}>
                    Edit Profile
                </Button>
                <Button
                    mode="contained"
                    onPress={handleLogout}
                    style={[styles.button, { backgroundColor: colors.primary }]}
                    color={colors.surface}>
                    Logout
                </Button>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  userInfo: {
    marginLeft: 20,
    flex: 1,
  },
    buttonContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        marginTop: 5,
        // marginBottom: 10,
    },
    button: {
        width: 180,
        height: 45,
        // alignSelf: 'center',
        // padding: 5,
        justifyContent: 'center',
        marginVertical: 5,
        marginHorizontal: 5,
    },
  title: {
    fontSize: 20,
    fontWeight: '900',
    // color: colors.text,
  },
  listSection: {
    // backgroundColor: colors.surface,
    borderRadius: 5,
    padding: 10,
  },
  listItemTitle: {
    // color: colors.primary,
    marginBottom: 5,
    fontWeight: '600',
  },
  listItemDescription: {
    // color: colors.text,
    // color: 'silver',
  },
  aboutSection: {
    marginBottom: 20,
  },
  statsSection: {
    marginTop: 10,
    marginBottom: 30,
  },
});

export default ProfilePage2;
