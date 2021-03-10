import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SCREENS from '../constants/screens';

const Stack = createStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {React.Children.toArray(
          SCREENS.map((screen) => (
            <Stack.Screen
              options={{
                title: screen.title,
                headerStyle: {
                  backgroundColor: '#212121',
                },
                headerTitleStyle: {
                  color: 'white',
                },
              }}
              component={screen.component}
              name={screen.name}
            />
          ))
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
