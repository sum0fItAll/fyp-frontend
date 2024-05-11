import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
// import all screens here
import * as Screens from './../screens';
import BookDetailsScreen from '../tools/screens/BookDetailsScreen';

import { supabase } from '../auth/supabaseClient';
import { loginSuccess, logoutSuccess } from '../auth/authSlice';
import { RootState } from './../state/store';
// import { useNavigation } from '@react-navigation/native';
// import { UseDispatch, useSelector } from 'react-redux';

import { Menu, IconButton } from 'react-native-paper';
import TabBarIcon from '../components/TabBarIcon';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
// import { createMaterialBottomTabNavigator } from 'react-native-paper/react-navigation';

import { useAppDispatch, useAppSelector } from '../hooks/dispatch_hook';

type MenuButtonsProps = {
    closeMenu: any; // Replace `any` with the appropriate type for the `closeMenu` prop
    navigation: any; // Replace `any` with the appropriate type for the `navigation` prop
    user: any; // Replace `any` with the appropriate type for the `user` prop
};

const MenuButtons: React.FC<MenuButtonsProps> = ({
    closeMenu,
    navigation,
    user,
}) => {
    return (
        <>
            <Menu.Item
                onPress={() => {
                    closeMenu();
                    navigation.navigate('Profile', { user });
                }}
                title="Profile"
            />
            <Menu.Item
                onPress={() => {
                    closeMenu();
                    navigation.navigate('Settings');
                }}
                title="Settings"
            />
        </>
    );
};

// type TabParamList = {
//     Home: undefined;
//     Search: undefined;
//     Forum: undefined;
//     // add other screens here...
// };

interface AppNavigatorProps {
    theme: any;
}

type RootStackParamList = {
    Landing: undefined;
    Login: undefined;
    SignUp: undefined;
    HomeTab: undefined;
    Profile: undefined;
    Settings: undefined;
    BookDetails: { book: any };
};

type TabParamList = {
    Home: undefined;
    Search: undefined;
    Forum: undefined;
};
const Stack = createStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator<TabParamList>();

// const Tab = createMaterialBottomTabNavigator();
// const ProfileSettingsStack = createStackNavigator();

// const ProfileSettingsNavigator = ({ user }) => (
//     <ProfileSettingsStack.Navigator
//         screenOptions={{
//             headerShown: false,
//         }}>
//         <ProfileSettingsStack.Screen
//             name="Profile"
//             component={Screens.ProfilePageSecond}
//             initialParams={{ user }}
//         />
//         <ProfileSettingsStack.Screen
//             name="Settings"
//             component={Screens.SettingsPage}
//         />
//     </ProfileSettingsStack.Navigator>
// );
const AppNavigator: React.FC<AppNavigatorProps> = ({ theme }) => {
    // const isLoggedIn = useSelector((state: RootState) => state.auth.isLoggedIn);
    // const navigation = useNavigation();
    const user = useAppSelector((state: RootState) => state.auth.user);
    const dispatch = useAppDispatch();

    const isLoggedIn = user !== null;

    const [visible, setVisible] = useState(false);

    const toggleMenu = () => {
        setVisible(!visible);
    };

    // const openMenu = () => {
    //     setVisible(true);
    // };

    const closeMenu = () => {
        setVisible(false);
    };

    useEffect(() => {
        supabase.auth.getSession().then(({ data: { session } }) => {
            if (session) {
                dispatch(loginSuccess(session.user));
            }
        }).catch(error => {
            console.error('Error getting session:', error);
        });

        const { data: authListener } = supabase.auth.onAuthStateChange(
            (event, session) => {
                if (session) {
                    if (event === 'SIGNED_IN') {
                        dispatch(loginSuccess(session.user));
                    } else if (event === 'SIGNED_OUT') {
                        dispatch(logoutSuccess());
                        const user = session.user;
                        console.log(user); // should be null if the user is logged out
                    }
                }
            },
        );
        return () => {
            authListener.subscription.unsubscribe();
        };
    }, [user, dispatch]);

    const renderHeaderRight = (navigation: any): React.ReactElement => (
        <Menu
			visible={visible}
			onDismiss={closeMenu}
			anchor={<IconButton icon="menu" onPress={toggleMenu} />}>
			<MenuButtons
				closeMenu={closeMenu}
				navigation={navigation}
				user={user}
			/>
		</Menu>
	);

    return (
        <NavigationContainer theme={theme}>
            <Stack.Navigator initialRouteName="Landing">
                {!isLoggedIn ? (
                    <>
                        <Stack.Screen
                            name="Landing"
                            component={Screens.LandingPage}
                            options={{ headerShown: false }}
                        />
                        <Stack.Screen
                            name="Login"
                            component={Screens.LoginPageSecond}
                        />
                        <Stack.Screen
                            name="SignUp"
                            component={Screens.SignUpPage}
                        />
                    </>
                ) : (
                    <>
                        <Stack.Screen
                            name="HomeTab"
                            options={{ headerShown: false }}>
                            {() => (
                                <Tab.Navigator
                                    initialRouteName="HomePage"
                                    screenOptions={{
                                        tabBarShowLabel: false,
                                        // tabBarBackgroundColor: theme.colors.surface,
                                        tabBarActiveTintColor: theme.colors.primary,
                                        tabBarInactiveTintColor: theme.colors.placeholder,
                                    }}
                                    // barStyle={{ backgroundColor: theme.colors.surface, height: 60, justifyContent: 'baseline'}}
                                >

                                {/* <Tab.Navigator
                                    initialRouteName="HomePage"
                                    screenOptions={{
                                        tabBarColor: theme.colors.onPrimary,
                                    }}
                                    barStyle={{ backgroundColor: theme.colors.surface, height: 60, justifyContent: 'baseline'}}
                                    shifting={true}
                                    labeled={false}
                                    activeColor={theme.colors.primary}
                                    inactiveColor={theme.colors.placeholder}
                                > */}
                                    <Tab.Screen
                                        name="Home"
                                        component={Screens.HomePage}
                                        options={({ navigation }) => ({
                                            tabBarIcon: props => (
                                                <TabBarIcon
                                                    name="home"
                                                    color={props.color}
                                                    size={23}
                                                />
                                            ),
                                            tabBarLabel: 'Home',
                                            headerRight: () =>
                                                renderHeaderRight(navigation, toggleMenu),
                                        })}
                                    />
                                    <Tab.Screen
                                        name="Search"
                                        component={Screens.SearchPage}
                                        options={{
                                            tabBarIcon: props => (
                                                <TabBarIcon
                                                    name="magnify"
                                                    color={props.color}
                                                    size={23}
                                                />
                                            ),
                                        }}
                                    />
                                    <Tab.Screen
                                        name="Forum"
                                        component={Screens.ForumPage}
                                        options={{
                                            tabBarIcon: props => (
                                                <TabBarIcon
                                                    name="chat-question"
                                                    color={props.color}
                                                    size={23}
                                                />
                                            ),
                                        }}
                                    />
                                </Tab.Navigator>
                            )}
                        </Stack.Screen>
                        <Stack.Screen
                            name="Profile">
                            {props => <Screens.ProfilePageSecond {...props} user={user}/>}
                        </Stack.Screen>
                        <Stack.Screen
                            name="Settings"
                            component={Screens.SettingsPage}
                        />
                        <Stack.Screen
                            name="BookDetails"
                            component={Screens.BookDetailsPage} // Add this line
                        />
                        {/* <Stack.Screen
                            name="BookDetailsScreen"
                            component={Screens.} // Add this line
                        /> */}
                    </>
                )}
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default AppNavigator;
