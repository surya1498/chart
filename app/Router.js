/* eslint-disable prettier/prettier */
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {getFocusedRouteNameFromRoute} from '@react-navigation/native';
import HomeScreen from '../app/screens/HomeScreen';
import SettingsScreen from '../app/screens/SettingsScreen';
import LoginScreen from '../app/screens/LoginScreen';
import {useSelector} from 'react-redux';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function getHeaderTitle(route) {
  const routeName = getFocusedRouteNameFromRoute(route) || 'HomeScreen';
  switch (routeName) {
    case 'HomeScreen':
      return 'My Home';

    case 'SettingsScreen':
      return 'My Settings';

    default:
      return 'HomeScreen';
  }
}

function AuthNavigator() {
  return (
    <Stack.Navigator headerMode="none" initialRouteName="LoginScreen">
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
    </Stack.Navigator>
  );
}

function AppNavigator() {
  const isLoggedIn = useSelector((state) => state.loginReducer.isLoggedIn);

  return (
    <Stack.Navigator initialRouteName="Auth">
      {isLoggedIn ? (
        <Stack.Screen
          name="HomeScreen"
          component={HomeTabs}
          options={({route}) => ({
            headerTitle: getHeaderTitle(route),
          })}
        />
      ) : (
        <Stack.Screen name="Auth" component={AuthNavigator} />
      )}
    </Stack.Navigator>
  );
}

const HomeStack = createStackNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Home" component={HomeScreen} />
    </HomeStack.Navigator>
  );
}

const SettingsStack = createStackNavigator();

function SettingsStackScreen() {
  return (
    <SettingsStack.Navigator>
      <SettingsStack.Screen name="Settings" component={SettingsScreen} />
    </SettingsStack.Navigator>
  );
}

function HomeTabs() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: '#73c700',
      }}>
      <Tab.Screen
        name="HomeScreen"
        component={HomeStackScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color, size}) => (
            <MaterialIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="SettingsScreen"
        component={SettingsStackScreen}
        options={{
          tabBarLabel: 'Settings',
          tabBarIcon: ({color, size}) => (
            <MaterialIcons name="settings" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default AppNavigator;
