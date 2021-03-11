import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

const Accordion = () => {
  const height = useSharedValue(0);

  const animatedStyles = useAnimatedStyle(() => {
    return {
      height: `${height.value}%`,
    };
  });
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#40739e',
      }}
    >
      <View style={{ marginHorizontal: 16 }}>
        <TouchableOpacity
          onPress={() => {
            height.value = withTiming(height.value > 0 ? 0 : 40);
          }}
          style={{
            paddingHorizontal: 12,
            paddingVertical: 10,
            backgroundColor: '#e1b12c',
            marginBottom: 5,
            borderRadius: 6,
          }}
        >
          <Text
            style={{
              color: '#192a56',
              fontWeight: 'bold',
              fontSize: 32,
            }}
          >
            Titulo del Acordeon
          </Text>
        </TouchableOpacity>
        <Animated.View
          style={[
            {
              backgroundColor: '#e1b12c',
              borderRadius: 6,
            },
            animatedStyles,
          ]}
        />
      </View>
    </View>
  );
};

export default Accordion;
