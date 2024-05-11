import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

type TabBarIconProps = {
    name: string;
    color: string;
    size: number;
};

const TabBarIcon: React.FC<TabBarIconProps> = ({ name, color, size }) => (
    <MaterialCommunityIcons name={name} size={size} color={color} />
);

export default TabBarIcon;
