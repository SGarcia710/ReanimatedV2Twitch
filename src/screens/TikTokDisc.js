import React, { useEffect } from 'react';
import { View, Image } from 'react-native';
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
} from 'react-native-reanimated';

const TikTokDisc = () => {
  const rotation = useSharedValue(0);

  const animatedStyles = useAnimatedStyle(() => {
    return {
      transform: [
        {
          rotateZ: `${rotation.value}deg`,
        },
      ],
    };
  });

  useEffect(() => {
    rotation.value = withRepeat(
      withTiming(360, { duration: 2000, easing: Easing.linear }),
      -1
    );
  }, []);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#40739e',
      }}
    >
      <Animated.View
        style={[
          {
            justifyContent: 'center',
            alignItems: 'center',
          },
          animatedStyles,
        ]}
      >
        <Image
          style={{
            width: 90,
            height: 90,
          }}
          source={{
            uri:
              'https://res.cloudinary.com/sgarciacloud/image/upload/v1614217280/disc_knxnbm.png',
          }}
        />
        <Image
          style={{
            width: 40,
            height: 40,
            position: 'absolute',
          }}
          source={require('../assets/images/heart.png')}
        />
      </Animated.View>
    </View>
  );
};

export default TikTokDisc;
