import React from 'react';
import { StyleSheet, StyleProp, TextStyle as RNTextStyle } from 'react-native';
import { useTheme } from '@react-navigation/native';
import Animated, { useAnimatedStyle, withTiming } from 'react-native-reanimated';
import { Title, Paragraph } from 'react-native-paper';

interface TextStyle extends RNTextStyle {
    color?: string;
    fontSize?: number;
    fontWeight?: 'bold' | 'normal';
    textAlign?: 'auto' | 'left' | 'right' | 'center' | 'justify';
}

interface AnimatedTextProps {
    children: React.ReactNode;
    style?: StyleProp<TextStyle>;
    size?: number;
    bold?: boolean;
    center?: boolean;
    color?: string;
    animated?: boolean;
    variant?: 'title' | 'paragraph';
}

const AnimatedText: React.FC<AnimatedTextProps> = ({
    children,
    style,
    size = 14,
    bold,
    center,
    color,
    animated,
    variant = 'title',
}) => {
    const theme = useTheme();
    const animatedStyles = useAnimatedStyle(() => {
        return {
            fontSize: withTiming(animated ? (variant === 'title' ? 20 : 16) : size,
            { duration: 500 }),
        };
    });

    const styles = StyleSheet.create({
        text: {
            color: color || theme.colors.text,
            fontSize: size,
            fontWeight: bold ? 'bold' : 'normal',
            textAlign: center ? 'center' : 'auto',
        },
    });

    if (animated) {
        return (
            <Animated.Text style={[styles.text, style, animatedStyles]} allowFontScaling={false}>
                {children}
            </Animated.Text>
        );
    }

    return variant === 'title' ? (
        <Title style={[styles.text, style]} allowFontScaling={false}>
            {children}
        </Title>
    ) : (
        <Paragraph style={[styles.text, style]} allowFontScaling={false}>
            {children}
        </Paragraph>
    );
};

export default React.memo(AnimatedText);
