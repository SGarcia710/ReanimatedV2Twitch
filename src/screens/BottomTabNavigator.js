import React from 'react';
import { View, Text, Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: 'black',
      }}
    >
      <Tab.Screen
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <Image
                style={{
                  tintColor: focused === true ? 'black' : 'gray',
                }}
                source={require('../assets/icons/Home.png')}
              />
            );
          },
        }}
        name="Inicio"
      >
        {() => {
          return <DummyScreen text="Pantalla 1" />;
        }}
      </Tab.Screen>
      <Tab.Screen
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <Image
                style={{
                  tintColor: focused === true ? 'black' : 'gray',
                }}
                source={require('../assets/icons/Profile.png')}
              />
            );
          },
        }}
        name="Perfil"
      >
        {() => {
          return <DummyScreen text="Pantalla 2" />;
        }}
      </Tab.Screen>
      <Tab.Screen
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <Image
                style={{
                  tintColor: focused === true ? 'black' : 'gray',
                }}
                source={require('../assets/icons/Inbox.png')}
              />
            );
          },
        }}
        name="Mensajes"
      >
        {() => {
          return <DummyScreen text="Pantalla 3" />;
        }}
      </Tab.Screen>
    </Tab.Navigator>
  );
};

const DummyScreen = ({ text }) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>{text}</Text>
    </View>
  );
};

export default BottomTabNavigator;
