import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import hexToRgba from 'hex-to-rgba';

import {theme} from '@utils/theme';
import {normalize} from '@utils/scale';
import UncheckedIcon from '@assets/icons/uncheckedIcon';
import CheckedIcon from '@assets/icons/checkedIcon';
import {OptionButtonProps} from '@utils/types';

const OptionButton: React.FC<OptionButtonProps> = ({
  data,
  checked,
  handleSelectOption,
}) => {
  const onSelect = () => {
    handleSelectOption(data.id);
  };
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={onSelect}
      style={[styles.button, checked && styles.checkedButton]}>
      <View style={styles.checkBox}>
        {checked ? <CheckedIcon /> : <UncheckedIcon />}
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.text}>
          {data.id}){' '}
          {data.texts?.map((x, key) => (
            <Text
              key={key}
              style={[x.bold && styles.bold, x.underline && styles.underline]}>
              {x.text}
            </Text>
          ))}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default OptionButton;

const styles = StyleSheet.create({
  button: {
    backgroundColor: hexToRgba(theme.colors.lighterBlue, 0.6),
    marginVertical: normalize(5),
    borderRadius: normalize(10),
    padding: normalize(15),
    flexDirection: 'row',
  },
  checkedButton: {
    backgroundColor: theme.colors.lightestBlue,
  },
  checkBox: {
    width: normalize(24),
    height: normalize(24),
  },
  textContainer: {
    marginHorizontal: normalize(15),
  },
  text: {
    color: theme.colors.lightFrenchBlue,
    fontSize: normalize(16),
    lineHeight: normalize(24),
  },
  bold: {
    fontFamily: theme.fonts.Nunito600,
    fontWeight: '600',
  },
  underline: {
    textDecorationLine: 'underline',
  },
});
