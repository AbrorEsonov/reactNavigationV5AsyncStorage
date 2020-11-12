import React from 'react';

import { createStackNavigator } from "@react-navigation/stack"
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


import HomeScreen from "./HomeScreen"
import DetailsScreen from "./DetailsScreen"
import ExploreScreen from "./ExploreScreen"
import ProfileScreen from "./ProfileScreen"


const HomeStack = createStackNavigator();
const DetailsStack = createStackNavigator();

const Tab = createMaterialBottomTabNavigator();

const MainTabScreen = () => (
        <Tab.Navigator
          initialRouteName="Home"
          activeColor="#fff"
        >
          <Tab.Screen
            name="Home"
            component={HomeStackScreen}
            options={{
              tabBarLabel: 'Home',
              tabBarColor: "#009387",
              tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons name="home" color={color} size={26} />
              ),
            }}
          />
          <Tab.Screen
            name="Notifications"
            component={DetailsStackScreen}
            options={{
              tabBarLabel: 'Updates',
              tabBarColor: "#1f65ff",
              tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons name="bell" color={color} size={26} />
              ),
            }}
          />
          <Tab.Screen
            name="Profile"
            component={ProfileScreen}
            options={{
              tabBarLabel: 'Profile',
              tabBarColor: "#694fad",
              tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons name="account" color={color} size={26} />
              ),
            }}
          />
          <Tab.Screen
            name="Explore"
            component={ExploreScreen}
            options={{
              tabBarLabel: 'Explore',
              tabBarColor: "#d02860",
              tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons name="cog-outline" color={color} size={26} />
              ),
            }}
          />
        </Tab.Navigator>
      );

export default MainTabScreen;

const HomeStackScreen = ({navigation}) => (
    <HomeStack.Navigator headerMode="none">
       <HomeStack.Screen  name="Home" component={HomeScreen} />
     </HomeStack.Navigator>
  )
  
  const DetailsStackScreen = ({navigation}) => (
    <DetailsStack.Navigator headerMode="none">
       <DetailsStack.Screen  name="Details" component={DetailsScreen} />
     </DetailsStack.Navigator>
  )