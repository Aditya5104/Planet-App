import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './Screens/Home';
import DetailsScreen from './Screens/Details';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

export default function App() {
  return (
<AppContainer></AppContainer>    
  );
}

const appStackNavigator=createStackNavigator(
  {
    Home:{
      screen:HomeScreen,
      navigationOptions:{
        headerShown:false
      }
    },
    Details:{
      screen:DetailsScreen
    }
  },
  {
    initialRouteName:"Home"
  }
)
const AppContainer=createAppContainer(appStackNavigator)