import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import SCREENS from '../constants/screens';

const Home = (props) => {
  return (
    <View>
      {React.Children.toArray(
        SCREENS.slice(1).map((screen) => (
          <TouchableOpacity
            style={{
              margin: 10,
              padding: 16,
              backgroundColor: '#212121',
              borderRadius: 6,
            }}
            onPress={() => props.navigation.navigate(screen.name)}
          >
            <Text
              style={{
                color: 'white',
                fontSize: 16,
              }}
            >
              {screen.title}
            </Text>
          </TouchableOpacity>
        ))
      )}
    </View>
  );
};

export default Home;
