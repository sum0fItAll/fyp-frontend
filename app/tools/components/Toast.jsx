import React, { useEffect } from 'react';
import { StatusBar } from 'react-native';
import { useTheme } from '@react-navigation/native';
import Animated, {
  useAnimatedStyle, useSharedValue, withDelay, withTiming,
} from 'react-native-reanimated';
import { proxy, useSnapshot } from 'valtio';

import Text from './Text';

// default options
const options = {
  message: null,
  type: 'success',
  time: 2000,
};

// using valtio
const state = proxy(options);

// global container for messages
export default function ToastContainer() {
  const { colors, status } = useTheme();
  const toast = useSnapshot(state);
  const height = status + 44;
  const show = useSharedValue(-height);

  const styles = {
    container: useAnimatedStyle(() => ({
      height,
      top: 0,
      left: 0,
      right: 0,
      zIndex: 100,
      position: 'absolute',
      paddingTop: status,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: colors[toast.type],
      borderBottomLeftRadius: 10,
      borderBottomRightRadius: 10,
      transform: [
        { translateY: show.value },
      ],
    })),
    text: {
      fontSize: 15,
      fontWeight: '500',
      color: colors.white,
    },
  };

  // show/hide when message set
  useEffect(() => {
    if (toast.message) {
      StatusBar.setBarStyle('light-content');
      show.value = withTiming(0);

      // hide message after given time
      show.value = withDelay(toast.time, withTiming(-height));
      setTimeout(() => {
        state.message = options.message;
        state.type = options.type;
        state.time = options.time;
        StatusBar.setBarStyle('default');
      }, toast.time + 300);
    }
  }, [toast.message]);

  return (
    <Animated.View style={styles.container}>
      <Text style={styles.text}>{toast.message}</Text>
    </Animated.View>
  );
}

export const useToast = () => {
  return {
    show: (msg, opts) => {
      state.message = msg;
      state.type = opts?.type || options.type;
      state.time = opts?.time || options.time;
    },
  };
};