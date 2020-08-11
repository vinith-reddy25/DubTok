import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './screen/Home'
import Nav from './components/Nav'
import About from './components/About'
import HomeScreen from './components/HomeScreen'
import Searchpage from './components/search'
const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
		<Tab.Screen name="Home" component={Home} />
    <Tab.Screen name="Search" component={Searchpage} /> 
      <Tab.Screen name="Add" component={About} />
      <Tab.Screen name="Chat" component={Nav} />
      <Tab.Screen name="Profile" component={HomeScreen} />  
     
    </Tab.Navigator>
  );
}

export default function App() {
	return (
	  <NavigationContainer>
		<MyTabs />
	  </NavigationContainer>
	);
  }

