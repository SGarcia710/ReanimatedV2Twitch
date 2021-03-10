import React from 'react';
import { View, Image } from 'react-native';
import Animated, {
  interpolateColor,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useSharedValue,
} from 'react-native-reanimated';

const Transitions = () => {
  const scrollY = useSharedValue(0);

  const scrollHandler = useAnimatedScrollHandler((event) => {
    scrollY.value = event.contentOffset.y;
  });

  const animatedStyles = useAnimatedStyle(() => {
    return {
      backgroundColor: interpolateColor(
        scrollY.value,
        [-50, 0, 50],
        ['#ED4C67', '#6F1E51', '#5758BB']
      ),
    };
  });

  return (
    <Animated.ScrollView
      onScroll={scrollHandler}
      scrollEventThrottle={16}
      contentContainerStyle={{
        height: '100%',
        width: '100%',
      }}
      style={
        ({
          height: '100%',
          width: '100%',
        },
        animatedStyles)
      }
    >
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Image
          source={require('../assets/images/heart.png')}
          style={[
            {
              width: 200,
              height: 200,
            },
          ]}
        />
      </View>
    </Animated.ScrollView>
  );
};

export default Transitions;
