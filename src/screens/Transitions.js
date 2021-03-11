import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import {
  useDerivedValue,
  useSharedValue,
  withSpring,
  withTiming,
} from 'react-native-reanimated';
import { Card } from '../components';

const CARDS = [
  require('../assets/images/Card2.png'),
  require('../assets/images/Card3.png'),
  require('../assets/images/Card4.png'),
];

const Transitions = () => {
  const [isRotated, setIsRotated] = useState(false);
  const isRotatedAnimated = useSharedValue(false);

  useEffect(() => {
    isRotatedAnimated.value = isRotated;
  }, [isRotated, isRotatedAnimated]);

  const isRotatedTransition = useDerivedValue(() => {
    return withTiming(isRotatedAnimated.value);
  });

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#40739e',
      }}
    >
      {React.Children.toArray(
        CARDS.map((card, index) => (
          <Card image={card} index={index} isRotated={isRotatedTransition} />
        ))
      )}

      <TouchableOpacity
        style={{
          position: 'absolute',
          bottom: 150,
          backgroundColor: 'white',
          paddingHorizontal: 22,
          paddingVertical: 14,
          borderRadius: 8,
        }}
        onPress={() => setIsRotated(!isRotated)}
      >
        <Text>{isRotated ? 'Centrar' : 'Rotar'}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Transitions;
