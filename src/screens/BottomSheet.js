import React from 'react';
import { View, Text, Dimensions, Button } from 'react-native';
import { PanGestureHandler } from 'react-native-gesture-handler';
import Animated, {
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

const { height, width } = Dimensions.get('window');

const BottomSheet = () => {
  const top = useSharedValue(height);

  const onGestureEvent = useAnimatedGestureHandler({
    onStart: (event, context) => {
      context.startingTop = top.value;
    },
    onActive: (event, context) => {
      top.value = context.startingTop + event.translationY;
    },
    onEnd: (event, context) => {
      if (top.value > height * 0.5) {
        top.value = withTiming(height);
      } else if (top.value < height * 0.2) {
        top.value = withTiming(height * 0.05);
      } else {
        top.value = withTiming(height * 0.3);
      }
    },
  });

  const animatedStyles = useAnimatedStyle(() => {
    return {
      top: top.value,
    };
  });
  return (
    <>
      <View
        style={{
          flex: 1,
          backgroundColor: '#212121',
          justifyContent: 'center',
        }}
      >
        <Button
          color="white"
          onPress={() => {
            top.value = withTiming(height * 0.3);
          }}
          title="Abrir Bottom Sheet"
        />
      </View>

      <PanGestureHandler onGestureEvent={onGestureEvent}>
        <Animated.View
          style={[
            {
              position: 'absolute',
              backgroundColor: '#d1d8e0',
              bottom: 0,
              left: 0,
              right: 0,
              alignItems: 'center',
              borderTopLeftRadius: 10,
              borderTopRightRadius: 10,
              padding: 20,
            },
            animatedStyles,
          ]}
        >
          <View
            style={{
              width: 50,
              height: 4,
              backgroundColor: '#212121',
              borderRadius: 4,
              // marginTop: 10,
              marginBottom: 16,
            }}
          />
          <Text>Contenido</Text>
        </Animated.View>
      </PanGestureHandler>
    </>
  );
};

export default BottomSheet;
