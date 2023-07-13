import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import {normalize} from '@utils/scale';
import {theme} from '@utils/theme';
import BackIcon2 from '@assets/icons/backIcon2';
import ForwardIcon from '@assets/icons/forwardIcon';
import {ButtonProps} from '@utils/types';

const Button: React.FC<ButtonProps> = ({
  success,
  label,
  preIcon,
  suffixIcon,
  style,
  onPress,
}) => {
  const defaultColors = ['#03A9F1', '#1A85B4'];
  const successColors = ['#1ABC9C', '#16A085'];
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={onPress}
      style={[styles.touchable, style]}>
      <LinearGradient
        colors={success ? successColors : defaultColors}
        style={styles.gradient}>
        {preIcon && (
          <View style={styles.backIcon}>
            <BackIcon2 />
          </View>
        )}
        <Text style={styles.label}>{label}</Text>
        {suffixIcon && (
          <View style={styles.forwardIcon}>
            <ForwardIcon />
          </View>
        )}
      </LinearGradient>
    </TouchableOpacity>
  );
};

export default Button;

Button.defaultProps = {
  success: false,
  label: '',
  preIcon: false,
  suffixIcon: false,
  style: {},
};

const styles = StyleSheet.create({
  touchable: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: normalize(10),
    overflow: 'hidden',
  },
  gradient: {
    width: '100%',
    height: '100%',
    flex: 1,
    alignContent: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: normalize(10),
    flexDirection: 'row',
  },
  backIcon: {
    width: normalize(16),
    height: normalize(16),
  },
  forwardIcon: {
    width: normalize(16),
    height: normalize(16),
  },
  label: {
    color: '#fff',
    textAlign: 'center',
    fontSize: normalize(14),
    fontFamily: theme.fonts.Nunito700,
    marginHorizontal: normalize(10),
  },
});
