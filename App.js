import React, {useEffect} from 'react';
import { View, ActivityIndicator } from "react-native"
import {NavigationContainer} from "@react-navigation/native"
import { createDrawerNavigator } from "@react-navigation/drawer"
import AsyncStorage from "@react-native-community/async-storage"

import MainTabScreen from "./screens/MainTabScreen"
import { DrawerContent } from "./screens/DrawerContent"
import BookmarkScreen from "./screens/BookmarkScreen"
import SupportScreen from "./screens/SupportScreen"
import SettingsScreen from "./screens/SettingsScreen"

import { AuthContext } from './components/context';


import RootStackScreen from "./screens/RootStackScreen"

const Drawer = createDrawerNavigator();

export default function App() {
  // const [isLoading, setIsLoading] = React.useState(true)
  // const [userToken, setUserToken] = React.useState(null)

 const initialLoginState ={
  isLoading: true,
  userName: null,
  userToken: null,
  }

  const loginReducer = (prevState, action) => {
    switch(action.type){
      case "RETRIEVE_TOKEN": 
        return {
          ...prevState,
          userToken: action.token,
          isLoading: false,
        };
      case "LOGIN": 
        return {
          ...prevState,
          userToken: action.token,
          userName: action.id,
          isLoading: false,
        };
      case "LOGOUT": 
        return {
          ...prevState,
          userName: null,
          userToken: null,
          isLoading: false,
        };
      case "REGISTER": 
        return {
          ...prevState,
          userToken: action.token,
          userName: action.id,
          isLoading: false,
        };
    }
  }
const [loginState, dispatch] = React.useReducer(loginReducer, initialLoginState)
  const authContext = React.useMemo(()=>({
    signIn: async(foundUser) => {

      const userToken = String(foundUser[0].userToken);
      const userName = foundUser[0].username;
     
        try{
          await AsyncStorage.setItem('userToken', userToken)
        } catch(e){
          console.log(e);
        }
      dispatch({ type: "LOGIN", id: userName, token: userToken })
    },
    signOut: async() => {
      try{
        await AsyncStorage.removeItem('userToken')
      } catch(e){
        console.log(e);
      }
      dispatch({ type: "LOGOUT" })
    },
    signUp: () => {
      
    },
  }), [])
  useEffect(() => {
    setTimeout(async()=> {
      // setIsLoading(false)
      let userToken;
      userToken = null;
      try {
        userToken = await AsyncStorage.getItem('userToken')
      } catch (error) {
        console.log(error);
      }
      dispatch({ type:'RETRIEVE_TOKEN', token: userToken })
    },1000)
  }, [])

  if (loginState.isLoading) {
    return (
      <View style={{flex: 1, justifyContent: "center",alignItems:"center",}}>
        <ActivityIndicator size="large"  />
      </View>
    );
  }
  return(
    <AuthContext.Provider value={authContext}>
    <NavigationContainer>
    {loginState.userToken !== null ? (
       <Drawer.Navigator drawerContent={props=> <DrawerContent {...props} /> } initialRouteName="Home" screenOptions={{
    headerStyle: {
         backgroundColor: "#009387"
       },
       headerTintColor: "#fff",
       headerTitleStyle: {
         fontWeight :"bold"
       }
   }} >
          <Drawer.Screen name="HomeDrawer" component={MainTabScreen} options={{
       title: "OverView"
     }}   />
          <Drawer.Screen name="SupportScreen" component={SupportScreen} />
          <Drawer.Screen name="SettingsScreen" component={SettingsScreen} />
          <Drawer.Screen name="BookmarkScreen" component={BookmarkScreen} />
       </Drawer.Navigator>
       ) 
       : 
      <RootStackScreen />
       }
    </NavigationContainer>
    </AuthContext.Provider>   
  )
}

