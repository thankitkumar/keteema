import React, { Component } from 'react'
import HomeStackNavigator from './src/navigations/BottomTab'
import SplashScreen from 'react-native-splash-screen';
export default class App extends Component {
  componentDidMount() {
    setTimeout(() => SplashScreen.hide(), 5000);
  }
  render() {
    return (
      <HomeStackNavigator />
    )
  }

}
