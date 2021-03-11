import React from 'react';
import { View, Text, Dimensions } from 'react-native';
import { PanGestureHandler } from 'react-native-gesture-handler';
import Animated, {
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withDecay,
  withSpring,
  withTiming,
} from 'react-native-reanimated';
import { useHeaderHeight } from '@react-navigation/stack';
import { clamp } from 'react-native-redash';

const { width, height } = Dimensions.get('window');

const DragAndDrop = () => {
  const headerHeight = useHeaderHeight();
  const translateX = useSharedValue(0);
  const translateY = useSharedValue(0);

  const boundX = width - 80;
  const boundY = height - 80 - headerHeight;

  const onGestureEvent = useAnimatedGestureHandler({
    onStart: (event, context) => {
      context.offsetX = translateX.value;
      context.offsetY = translateY.value;
    },
    onActive: (event, context) => {
      translateX.value = clamp(
        context.offsetX + event.translationX,
        -(boundX / 2),
        boundX / 2
      );
      translateY.value = clamp(
        context.offsetY + event.translationY,
        -(boundY / 2),
        boundY / 2
      );
    },
    onEnd: (event) => {
      // Return to origin
      // translateX.value = withTiming(0);
      // translateY.value = withTiming(0);
    },
  });

  const animatedStyles = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: translateX.value,
        },
        {
          translateY: translateY.value,
        },
      ],
    };
  });

  return (
    <View
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        backgroundColor: '#7f8fa6',
      }}
    >
      <PanGestureHandler onGestureEvent={onGestureEvent}>
        <Animated.View
          style={[
            {
              width: 80,
              height: 80,
              borderRadius: 80 / 2,
              backgroundColor: '#e84118',
            },
            animatedStyles,
          ]}
        />
      </PanGestureHandler>
    </View>
  );
};

export default DragAndDrop;
