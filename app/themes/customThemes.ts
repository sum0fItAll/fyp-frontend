import {
    MD3DarkTheme as PaperDarkTheme,
    MD3LightTheme as PaperLightTheme,
    adaptNavigationTheme,
    DefaultTheme as PaperDefaultTheme,
} from 'react-native-paper';

import {
    DarkTheme as NavigationDarkTheme,
    DefaultTheme as NavigationDefaultTheme,
} from '@react-navigation/native';

export const { LightTheme, DarkTheme } = adaptNavigationTheme({
    reactNavigationLight: NavigationDefaultTheme,
    reactNavigationDark: NavigationDarkTheme,
});

const CombinedDefaultTheme = {
    ...PaperLightTheme,
    ...LightTheme,
    colors: {
        ...PaperLightTheme.colors,
        ...LightTheme.colors,
    },
};
const CombinedDarkTheme = {
    ...PaperDarkTheme,
    ...DarkTheme,
    colors: {
        ...PaperDarkTheme.colors,
        ...DarkTheme.colors,
    },
};

const ClassicTheme = {
    ...PaperDefaultTheme,
    ...NavigationDefaultTheme,
    colors: {
        ...PaperDefaultTheme.colors,
        ...NavigationDefaultTheme.colors,
        primary: '#000000',
        accent: '#8B4513',
        background: '#ffffff',
        surface: '#ffffff',
        text: '#000000',
    },
};

const NightTheme = {
    ...PaperDarkTheme,
    ...NavigationDarkTheme,
    colors: {
        ...PaperDarkTheme.colors,
        ...NavigationDarkTheme.colors,
        primary: '#e8e8e8',
        accent: '#FFD700',
        background: '#000000',
        surface: '#1a1a1a',
        text: '#ffffff',
    },
};

const VintageTheme = {
    ...PaperDefaultTheme,
    ...NavigationDefaultTheme,
    colors: {
        ...PaperDefaultTheme.colors,
        ...NavigationDefaultTheme.colors,
        primary: '#8B4513',
        accent: '#DAA520',
        background: '#FDF5E6',
        surface: '#FDF5E6',
        text: '#8B4513',
    },
};

const ModernTheme = {
    ...PaperDefaultTheme,
    ...NavigationDefaultTheme,
    colors: {
        ...PaperDefaultTheme.colors,
        ...NavigationDefaultTheme.colors,
        primary: '#1E90FF',
        accent: '#FF4500',
        background: '#ffffff',
        surface: '#ffffff',
        text: '#000000',
    },
};
const MintTheme = {
    ...PaperDefaultTheme,
    ...NavigationDefaultTheme,
    colors: {
        ...PaperDefaultTheme.colors,
        ...NavigationDefaultTheme.colors,
        primary: '#98FF98',
        accent: '#32CD32',
        background: '#ffffff',
        surface: '#ffffff',
        text: '#000000',
    },
};

const SunsetTheme = {
    ...PaperDefaultTheme,
    ...NavigationDefaultTheme,
    colors: {
        ...PaperDefaultTheme.colors,
        ...NavigationDefaultTheme.colors,
        primary: '#FF4500',
        accent: '#800080',
        background: '#F0E68C',
        surface: '#F0E68C',
        text: '#000000',
    },
};

const OceanTheme = {
    ...PaperDefaultTheme,
    ...NavigationDefaultTheme,
    colors: {
        ...PaperDefaultTheme.colors,
        ...NavigationDefaultTheme.colors,
        primary: '#1E90FF',
        accent: '#20B2AA',
        background: '#ffffff',
        surface: '#ffffff',
        text: '#000000',
    },
};

const ForestTheme = {
    ...PaperDefaultTheme,
    ...NavigationDefaultTheme,
    colors: {
        ...PaperDefaultTheme.colors,
        ...NavigationDefaultTheme.colors,
        primary: '#228B22',
        accent: '#8B4513',
        background: '#F5F5DC',
        surface: '#F5F5DC',
        text: '#000000',
    },
};

const MintDarkTheme = {
    ...PaperDarkTheme,
    ...NavigationDarkTheme,
    colors: {
        ...PaperDarkTheme.colors,
        ...NavigationDarkTheme.colors,
        primary: '#98FF98',
        accent: '#32CD32',
        background: '#000000',
        surface: '#1a1a1a',
        text: '#ffffff',
    },
};

const SunsetDarkTheme = {
    ...PaperDarkTheme,
    ...NavigationDarkTheme,
    colors: {
        ...PaperDarkTheme.colors,
        ...NavigationDarkTheme.colors,
        primary: '#FF4500',
        accent: '#800080',
        background: '#000000',
        surface: '#1a1a1a',
        text: '#ffffff',
    },
};

const OceanDarkTheme = {
    ...PaperDarkTheme,
    ...NavigationDarkTheme,
    colors: {
        ...PaperDarkTheme.colors,
        ...NavigationDarkTheme.colors,
        primary: '#1E90FF',
        accent: '#20B2AA',
        background: '#000000',
        surface: '#1a1a1a',
        text: '#ffffff',
    },
};

const ForestDarkTheme = {
    ...PaperDarkTheme,
    ...NavigationDarkTheme,
    colors: {
        ...PaperDarkTheme.colors,
        ...NavigationDarkTheme.colors,
        primary: '#228B22',
        accent: '#8B4513',
        background: '#000000',
        surface: '#1a1a1a',
        text: '#ffffff',
    },
};

export {
    ClassicTheme,
    NightTheme,
    VintageTheme,
    ModernTheme,
    MintTheme,
    SunsetTheme,
    OceanTheme,
    ForestTheme,
    MintDarkTheme,
    SunsetDarkTheme,
    OceanDarkTheme,
    ForestDarkTheme,
    CombinedDarkTheme,
    CombinedDefaultTheme,
};
