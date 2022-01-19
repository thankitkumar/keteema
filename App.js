import React, { Component } from 'react'
import { View, Text, SafeAreaView } from 'react-native'
import HomeStackNavigator from './src/navigations'
import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import SplashScreen from 'react-native-splash-screen';
import AdvertisingScreen from './src/components/screens/ProfileAllScreens/Advertising'
import DeleteAccountScreen from './src/components/screens/ProfileAllScreens/Delete Account'
import LogoutScreen from './src/components/screens/ProfileAllScreens/Logout'
import MyAdsScreen from './src/components/screens/ProfileAllScreens/my ads'
import MyProfileScreen from './src/components/screens/ProfileAllScreens/My Profile'
import SavedSerchesScreen from './src/components/screens/ProfileAllScreens/my saved searches'
import ReportAnIssueScreen from './src/components/screens/ProfileAllScreens/Report an issue'
import SupportScreen from './src/components/screens/ProfileAllScreens/Support'
import TermsConditionScreen from './src/components/screens/ProfileAllScreens/Terms & conditions'
const Stack = createStackNavigator();
export default class App extends Component {
  componentDidMount(){
    setTimeout(() => SplashScreen.hide(), 3000);
  }  
  render(){
    return (
      <NavigationContainer>
        <Stack.Navigator>
            {/* Onboarding screen */}
            <Stack.Screen
              name="AdvertisingScreen"
              component={AdvertisingScreen}
              options={{headerShown: false}}
            />
            {/* Login screen */}
            <Stack.Screen
              name="DeleteAccountScreen"
              component={DeleteAccountScreen}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="LogoutScreen"
              component={LogoutScreen}
              options={{headerShown: false}}
            />
            {/* TermsScreen screen */}
            <Stack.Screen
              name="MyAdsScreen"
              component={MyAdsScreen}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="MyProfileScreen"
              component={MyProfileScreen}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="SavedSerchesScreen"
              component={SavedSerchesScreen}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="ReportAnIssueScreen"
              component={ReportAnIssueScreen}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="SupportScreen"
              component={SupportScreen}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="TermsConditionScreen"
              component={TermsConditionScreen}
              options={{headerShown: false}}
            />
          </Stack.Navigator>
        <HomeStackNavigator />
      </NavigationContainer>

    )
  }

}
