import {Ionicons} from '@expo/vector-icons';
import Cart from './Cart';
import Home from './Home';
import Favourite from './Favourites';
import Profile from './Profile';
import { createBottomTabNavigator } 
from '@react-navigation/bottom-tabs';
import {View,Text} from 'react-native';
const Tab = createBottomTabNavigator()
export default function TabNavigation () {
     
    return (
        
            <Tab.Navigator screenOptions={{tabBarActiveTintColor:'red',tabBarStyle:{padding:5,height:100},tabBarLabelStyle:{fontSize:12}}}>
                <Tab.Screen name='Home' component={Home} options={{
                    tabBarIcon:({color,size,focused})=>(
                        <Ionicons name={focused?'home':'home-outline'} color={color} size={size}/>
                    )
                }}/>
                <Tab.Screen name='Cart' component={Cart} options={{
                    tabBarIcon:({color,size,focused})=>(
                        <Ionicons name={focused?'cart':'cart-outline'} color={color} size={size}/>
                    )
                }}/>
                <Tab.Screen name='Favourite' component={Favourite} options={{
                    tabBarIcon:({color,size,focused})=>(
                        <Ionicons name={focused?'heart':'heart-outline'} color={color} size={size}/>
                    )
                }}/>
                <Tab.Screen name='Profile' component={Profile} options={{
                    tabBarIcon:({color,size,focused})=>(
                        <Ionicons name={focused?'person':'person-outline'} color={color} size={size}/>
                    )
                }}/>
            </Tab.Navigator>
        
        
    )
}