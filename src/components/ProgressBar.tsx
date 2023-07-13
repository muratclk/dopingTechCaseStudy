import React, {useEffect, useRef, useState, useCallback} from 'react';
import {StyleSheet, View, Animated, LayoutChangeEvent} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import {normalize} from '@utils/scale';
import {ProgressBarProps} from '@utils/types';

const ProgressBar: React.FC<ProgressBarProps> = ({step, steps, height}) => {
  const [width, setWidth] = useState(0);
  const colorPalette = ['#F6E0A0', '#F3D275'];
  const colors = Array.from({length: 30}, (_, i) =>
    i % 2 ? colorPalette[0] : colorPalette[1],
  );
  const locations = Array.from(
    {length: 30},
    (_, i) => +((1 / 30) * i).toFixed(2),
  );
  const animatedValue = useRef(new Animated.Value(-1000)).current;
  const reactive = useRef(new Animated.Value(-1000)).current;
  const styles = styling(height, animatedValue);

  const animate = useCallback(
    () =>
      Animated.timing(animatedValue, {
        toValue: reactive,
        duration: 300,
        useNativeDriver: true,
      }).start(),
    [animatedValue, reactive],
  );

  useEffect(() => {
    animate();
  }, [animate]);

  useEffect(() => {
    reactive.setValue(-width + (width * step) / steps);
  }, [step, width, reactive, steps]);

  const onLayout = (e: LayoutChangeEvent) => {
    const newWidth = e.nativeEvent.layout.width;
    setWidth(newWidth);
  };
  return (
    <View style={styles.container}>
      <Animated.View style={[styles.animatedProgress]}>
        <LinearGradient
          onLayout={onLayout}
          style={styles.gradient}
          colors={colors}
          locations={locations}
          useAngle={true}
          angle={-140}
        />
      </Animated.View>
    </View>
  );
};

const styling = (height: number, animatedValue: Animated.Value) =>
  StyleSheet.create({
    container: {
      width: '100%',
      height,
      backgroundColor: 'rgba(255,255,255,0.1)',
      borderRadius: height,
      overflow: 'hidden',
      borderWidth: 0.1,
    },
    animatedProgress: {
      height,
      width: '100%',
      borderRadius: height,
      backgroundColor: 'rgba(0,0,0.1)',
      overflow: 'hidden',
      position: 'absolute',
      top: 0,
      left: 0,
      transform: [
        {
          translateX: animatedValue,
        },
      ],
    },
    gradient: {height: normalize(45), width: '100%'},
  });

export default ProgressBar;
