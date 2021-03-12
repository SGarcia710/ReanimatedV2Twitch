import { useHeaderHeight } from '@react-navigation/stack';
import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import Animated, {
  interpolateColor,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useSharedValue,
} from 'react-native-reanimated';
import useWindowDimensions from 'react-native/Libraries/Utilities/useWindowDimensions';

const COLORS = [
  '#63cdda',
  '#778beb',
  '#786fa6',
  '#cf6a87',
  '#ea8685',
  '#f3a683',
  '#f8a5c2',
  '#f7d794',
];

const ColorInterpolation = () => {
  const { width, height } = useWindowDimensions();
  const headerHeight = useHeaderHeight();

  const scrollY = useSharedValue(0);

  const onScroll = useAnimatedScrollHandler((event) => {
    scrollY.value = event.contentOffset.y;
    console.log(scrollY.value);
  });

  const animatedBackground = useAnimatedStyle(() => {
    return {
      backgroundColor: interpolateColor(
        scrollY.value,
        COLORS.map((_, index) => index * (height - headerHeight)),
        COLORS
      ),
    };
  });

  return (
    <View style={{ flex: 1 }}>
      <Animated.View
        style={[
          {
            ...StyleSheet.absoluteFillObject,
          },
          animatedBackground,
        ]}
      />
      <Animated.ScrollView
        showsVerticalScrollIndicator={false}
        pagingEnabled
        onScroll={onScroll}
        scrollEventThrottle={16}
      >
        {React.Children.toArray(
          COLORS.map((color) => (
            <View
              style={{
                height: height - headerHeight,
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Text>Hola soy el color {color}</Text>
            </View>
          ))
        )}
      </Animated.ScrollView>
    </View>
  );
};

export default ColorInterpolation;
