import React, { useEffect } from 'react';
import { View, Text, Image } from 'react-native';
import Animated, {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withSequence,
  withSpring,
  withTiming,
} from 'react-native-reanimated';

const Transitions = () => {
  const scale = useSharedValue(0);

  useEffect(() => {
    scale.value = withRepeat(
      withSequence(
        withTiming(1, {
          duration: 1000,
        }),
        withTiming(0, {
          duration: 1000,
        })
      ),
      -1
    );
    setInterval(() => {
      console.log(`${123123 + 123123}`);
    }, 1);
  }, []);

  const animatedStyles = useAnimatedStyle(() => {
    return {
      transform: [
        {
          scale: interpolate(scale.value, [0, 1], [0.5, 1]),
        },
      ],
    };
  });
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#5758BB',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Animated.Image
        source={require('../assets/images/heart.png')}
        style={[
          {
            width: 200,
            height: 200,
          },
          animatedStyles,
        ]}
      />
    </View>
  );
};

export default Transitions;
