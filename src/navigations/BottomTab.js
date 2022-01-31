import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native';
import { HomeScreenNavigator, FavoritesScreenNavigator, PlaceAnAdScreenNavigator, ChatsScreenNavigator, ProfileScreenNavigator } from './CustomNavigation';
import Icon from 'react-native-vector-icons/FontAwesome';
// import { ApolloProvider } from 'react-apollo'
// import ApolloClient from 'apollo-boost'
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

const Tab = createBottomTabNavigator();

const client = new ApolloClient({
    cache: new InMemoryCache(),
    uri: 'http://65.1.64.139/graphql/'
})
function HomeStackNavigator() {
    return (
        <NavigationContainer>
            <ApolloProvider client={client}>
                <Tab.Navigator>
                    <Tab.Screen
                        name="HomeScreen"
                        component={HomeScreenNavigator}
                        options={{
                            headerShown: false,
                            tabBarLabel: "Home",
                            tabBarActiveTintColor: '#000000',
                            tabBarIcon: ({ color, size }) => (
                                <Icon name="home" size={30} color="#000000" />
                            )
                        }}
                    />
                    <Tab.Screen
                        name="My Favorites"
                        component={FavoritesScreenNavigator}
                        options={{
                            headerTitleAlign: 'center',
                            title: 'My Favorites',
                            tabBarLabel: "Favorites",
                            tabBarActiveTintColor: '#000000',
                            tabBarIcon: ({ color, size }) => (
                                <Icon name="heart" size={30} color="#000000" />
                            )
                        }}
                    />
                    <Tab.Screen
                        name="PlaceAnAdScreen"
                        component={PlaceAnAdScreenNavigator}
                        options={{
                            // headerShown: false,
                            title: '',
                            tabBarLabel: "Place an ad",
                            tabBarActiveTintColor: '#000000',
                            tabBarIcon: ({ color, size }) => (
                                <Icon name="plus-circle" size={30} color="#FF0000" />
                            )
                        }}
                    />
                    <Tab.Screen
                        name="ChatsScreen"
                        component={ChatsScreenNavigator}
                        options={{
                            headerShown: false,
                            tabBarLabel: "Chats",
                            tabBarActiveTintColor: '#000000',
                            tabBarIcon: ({ color, size }) => (
                                <Icon name="comments" size={30} color="#000000" />
                            )
                        }}
                    />


                    <Tab.Screen
                        name="ProfileScreen"
                        component={ProfileScreenNavigator}
                        options={{
                            headerShown: false,
                            tabBarLabel: "Profile",
                            tabBarActiveTintColor: '#000000',
                            tabBarIcon: ({ color, size }) => (
                                <Icon name="user" size={30} color="#000000" />
                            )
                        }}
                    />
                </Tab.Navigator>
            </ApolloProvider>
        </NavigationContainer>
    )
}
export default HomeStackNavigator;