import React from 'react';

import AccountScreen from "../components/AccountScreen";
import ChartScreen from "../components/ChartScreen";
import FilmsScreen from "../components/FilmsScreen";

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';


const Tab = createBottomTabNavigator();

export default function AppNavigation() {
    return (
        <Tab.Navigator
            tabBarOptions={
                { labelStyle: { paddingBottom: 5 } }}
        >
            <Tab.Screen
                name="General"
                component={AccountScreen}
                options={{
                    tabBarLabel: 'General',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="account" color={color} size={size} />
                    ),
                }}
            />

            <Tab.Screen
                name="Charts"
                component={ChartScreen}
                options={{
                    tabBarLabel: 'Charts',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="poll" color={color} size={size} />
                    ),
                }}
            />

            <Tab.Screen
                name="Films"
                component={FilmsScreen}
                options={{
                    tabBarLabel: 'Films',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="movie-roll" color={color} size={size} />
                    ),
                }}

            />
        </Tab.Navigator>
    );
}