import React from 'react';
import { useColorScheme } from 'react-native';

import { Provider as PaperProvider } from 'react-native-paper';

import { Provider } from 'react-redux';
import store from './app/state/store';

import { ClassicTheme as CustomDefaultTheme } from './app/themes/customThemes';
import { NightTheme as CustomDarkTheme } from './app/themes/customThemes';

import AppNavigator from './app/navigation/NavigationStore';

function App(): React.JSX.Element {
    const isDarkMode = useColorScheme() === 'dark';

    const theme = isDarkMode ? CustomDarkTheme : CustomDefaultTheme;

    return (
        <Provider store={store}>
            <PaperProvider theme={theme}>
                <AppNavigator theme={theme} />
            </PaperProvider>
        </Provider>
    );
}

export default App;
