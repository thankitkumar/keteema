import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import AdvertisingScreen from '../components/screens/ProfileAllScreens/Advertising'
import DeleteAccountScreen from '../components/screens/ProfileAllScreens/Delete Account'
import LogoutScreen from '../components/screens/ProfileAllScreens/Logout'
import MyAdsScreen from '../components/screens/ProfileAllScreens/my ads'
import MyProfileScreen from '../components/screens/ProfileAllScreens/My Profile'
import SavedSerchesScreen from '../components/screens/ProfileAllScreens/my saved searches'
import ReportAnIssueScreen from '../components/screens/ProfileAllScreens/Report an issue'
import SupportScreen from '../components/screens/ProfileAllScreens/Support'
import TermsConditionScreen from '../components/screens/ProfileAllScreens/Terms & conditions'
import HomeScreen from '../components/screens/appScreens/home'
import FavoritesScreen from '../components/screens/appScreens/favorites'
import ChatsScreen from '../components/screens/appScreens/Chats'
import PlaceAnAdScreen from '../components/screens/appScreens/place an ad'
import ProfileScreen from '../components/screens/appScreens/Profile'
import FullAboutProduct from '../components/screens/appScreens/HomeAbout/FullAbout';
import OneAboutProduct from '../components/screens/appScreens/HomeAbout/OneProduct';
import HomeCategories from '../components/screens/appScreens/HomeAbout/HomeCategories';
import { TextInput } from 'react-native';
const Stack = createStackNavigator();
const screenOptionStyle = {
    headerShown: false
}

const HomeScreenNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="homeScreen"
                component={HomeScreen}
                options={{ headerShown: false, }}
            />
            <Stack.Screen
                name="FullAboutProduct"
                component={FullAboutProduct}
                options={{headerShown:true,headerTitleAlign: 'center',
                title: 'Search your product'}}


            />
            <Stack.Screen
                name="OneAboutProduct"
                component={OneAboutProduct}
                options={{ headerShown: true, }}
            />
            <Stack.Screen
                name="HomeCategories"
                component={HomeCategories}
                options={{ headerShown: true, }}
            />
        </Stack.Navigator>
    )
}
export { HomeScreenNavigator }

const FavoritesScreenNavigator = () => {
    return (
        <Stack.Navigator screenOptions={screenOptionStyle}>
            <Stack.Screen
                name="favoritesScreen"
                component={FavoritesScreen}
            />
        </Stack.Navigator>
    )
}
export { FavoritesScreenNavigator }

const ChatsScreenNavigator = () => {
    return (
        <Stack.Navigator screenOptions={screenOptionStyle}>
            <Stack.Screen
                name="chatsScreen"
                component={ChatsScreen}
            />
        </Stack.Navigator>
    )
}
export { ChatsScreenNavigator }

const PlaceAnAdScreenNavigator = () => {
    return (
        <Stack.Navigator screenOptions={screenOptionStyle}>
            <Stack.Screen
                name="placeAnAdScreen"
                component={PlaceAnAdScreen}
            />
        </Stack.Navigator>
    )
}
export { PlaceAnAdScreenNavigator }

const ProfileScreenNavigator = () => {
    return (
        <Stack.Navigator screenOptions={screenOptionStyle}>
            <Stack.Screen
                name="profileScreen"
                component={ProfileScreen}
                options={{
                    headerShown: true,
                    headerTitleAlign: 'center',
                    title: 'My Account'
                }}
            />
            <Stack.Screen
                name="AdvertisingScreen"
                component={AdvertisingScreen}
                options={{
                    headerShown: true,
                    title: 'My Ads'
                }}
            />

            <Stack.Screen
                name="DeleteAccountScreen"
                component={DeleteAccountScreen}
                options={{
                    headerShown: true,
                    title: 'Delete Account'
                }}
            />
            <Stack.Screen
                name="LogoutScreen"
                component={LogoutScreen}
                options={{
                    headerShown: true,
                    title: 'Logout'
                }}
            />

            <Stack.Screen
                name="MyAdsScreen"
                component={MyAdsScreen}
                options={{
                    headerShown: true,
                    title: 'My ads'
                }}
            />
            <Stack.Screen
                name="MyProfileScreen"
                component={MyProfileScreen}
                options={{
                    headerShown: true,
                    title: 'My Profile'
                }}
            />
            <Stack.Screen
                name="SavedSerchesScreen"
                component={SavedSerchesScreen}
                options={{
                    headerShown: true,
                    title: 'My Saved Serches'
                }}
            />
            <Stack.Screen
                name="ReportAnIssueScreen"
                component={ReportAnIssueScreen}
                options={{
                    headerShown: true,
                    headerTitleAlign: 'center',
                    title: 'My Saved Serches'
                }}
            />
            <Stack.Screen
                name="SupportScreen"
                component={SupportScreen}
                options={{
                    headerShown: true,
                    title: 'My Saved Serches'
                }}
            />
            <Stack.Screen
                name="TermsConditionScreen"
                component={TermsConditionScreen}
                options={{
                    headerShown: true,
                    title: 'My Saved Serches'
                }}
            />
        </Stack.Navigator>
    )
}
export { ProfileScreenNavigator }

