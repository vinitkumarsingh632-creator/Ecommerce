import '../global.css'
import {View,Text} from 'react-native';
import TabNavigation from './Navigation'
import { NavigationContainer } from '@react-navigation/native';
export default function App () {
  return (
    <>
    <NavigationContainer>
      <TabNavigation/>
    </NavigationContainer>
    <Text className="text-amber-400">Hello</Text>
    </>
  )
}