import { Tabs } from 'expo-router';
import React from 'react';

import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import CustomHeader from '../../components/CustomHeader';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
      }}>
      <Tabs.Screen
        name="home"
        options={{
                title: 'Home',
                header: () => <CustomHeader title="Cycle" />,
                tabBarIcon: ({ color, focused }) => (
                    <TabBarIcon name={focused ? 'home' : 'home-outline'} color={color} />
                ),
        }}
      />
        <Tabs.Screen
            name="notifications"
            options={{
                title: 'Notifications',
                header: () => <CustomHeader title="Cycle" />,
                tabBarIcon: ({ color, focused }) => (
                    <TabBarIcon name={focused ? 'notifications' : 'notifications-outline'} color={color} />
                ),
            }}
        />
        <Tabs.Screen
            name="wallet"
            options={{
                title: 'Wallet',
                header: () => <CustomHeader title="Cycle" />,
                tabBarIcon: ({ color, focused }) => (
                    <TabBarIcon name={focused ? 'wallet' : 'wallet-outline'} size={24} color={color} />
                ),
            }}
        />

        <Tabs.Screen
            name="profile"
            options={{
                title: 'Profile',
                header: () => <CustomHeader title="Cycle" />,
                tabBarIcon: ({ color, focused }) => (
                    <TabBarIcon
                        name={focused ? 'person' : 'person-outline'} // Change to 'person' for filled icon and 'person-outline' for outlined
                        size={24}
                        color={color}
                    />
                ),
            }}
        />
    </Tabs>
  );
}
