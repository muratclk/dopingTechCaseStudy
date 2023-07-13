import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import hexToRgba from 'hex-to-rgba';

import BackIcon from '@assets/icons/backIcon';
import {theme} from '@utils/theme';
import {normalize} from '@utils/scale';

const BackButton: React.FC = () => {
  return (
    <TouchableOpacity style={styles.buttonStyle}>
      <BackIcon />
    </TouchableOpacity>
  );
};
export default BackButton;

const styles = StyleSheet.create({
  buttonStyle: {
    backgroundColor: hexToRgba(theme.colors.lightestFrenchBlue, 0.08),
    borderRadius: normalize(10),
    padding: normalize(8),
    width: normalize(50),
    height: normalize(50),
  },
});
