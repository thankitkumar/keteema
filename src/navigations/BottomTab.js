import React from 'react'
import { View, Text } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Icon from 'react-native-vector-icons/FontAwesome';
import ChatsScreen from '../components/screens/appScreens/Chats'
import HomeScreen from '../components/screens/appScreens/home'
import FavoritesScreen from '../components/screens/appScreens/favorites'
import PlaceAnAdScreen from '../components/screens/appScreens/place an ad'
import ProfileScreen from '../components/screens/appScreens/Profile'
const Tab = createBottomTabNavigator();
export default function HomeStackNavigator() {
    return (
        <Tab.Navigator>
            <Tab.Screen
                name="HomeScreen"
                component={HomeScreen}
                options={{
                    headerShown: false,
                    tabBarLabel: "Home",  
                    tabBarActiveTintColor:'#000000',                 
                    tabBarIcon: ({ color, size }) => (
                        <Icon name="home" size={30} color="#000000" />
                    )
                }}
            />
             <Tab.Screen
                name="My Favorites"
                component={FavoritesScreen}
                options={{
                    headerTitleAlign: 'center',
                    title: 'My Favorites',
                    tabBarLabel: "Favorites",
                    tabBarActiveTintColor:'#000000',
                    tabBarIcon: ({ color, size }) => (
                        <Icon name="heart" size={30} color="#000000" />
                    )
                }}
            />
             <Tab.Screen
                name="PlaceAnAdScreen"
                component={PlaceAnAdScreen}
                options={{
                    // headerShown: false,
                    title: '',
                    tabBarLabel: "Place an ad",
                    tabBarActiveTintColor:'#000000',
                    tabBarIcon: ({ color, size }) => (
                        <Icon name="plus-circle" size={30} color="#FF0000" />
                    )
                }}
            />
            <Tab.Screen
                name="ChatsScreen"
                component={ChatsScreen}
                options={{
                    headerShown: false,
                    tabBarLabel: "Chats",
                    tabBarActiveTintColor:'#000000',
                    tabBarIcon: ({ color, size }) => (
                        <Icon name="comments" size={30} color="#000000" />
                    )
                }}
            />
           
           
            <Tab.Screen
                name="ProfileScreen"
                component={ProfileScreen}
                options={{
                    headerTitleAlign: 'center',
                    title: 'My Account',
                    tabBarLabel: "Profile",
                    tabBarActiveTintColor:'#000000',
                    tabBarIcon: ({ color, size }) => (
                        <Icon name="user" size={30} color="#000000" />
                    )
                }}
            />
        </Tab.Navigator>

    )
}
