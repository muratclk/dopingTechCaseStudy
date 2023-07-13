import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {useActionSheet} from '@expo/react-native-action-sheet';
import {useNavigation} from '@react-navigation/native';
import hexToRgba from 'hex-to-rgba';

import MoreIcon from '@assets/icons/moreIcon';
import {theme} from '@utils/theme';
import {normalize} from '@utils/scale';
import {MoreButtonProps} from '@utils/types';

const MoreButton: React.FC<MoreButtonProps> = ({setopenAnswerSheet}) => {
  const {showActionSheetWithOptions} = useActionSheet();
  const navigation = useNavigation();

  const onPress = () => {
    const options = ['Cevap Anahtarı', 'Testi Bitir', 'Vazgeç'];
    const destructiveButtonIndex = 1;
    const cancelButtonIndex = 2;

    showActionSheetWithOptions(
      {
        options,
        cancelButtonIndex,
        destructiveButtonIndex,
      },
      (selectedIndex: number | undefined) => {
        switch (selectedIndex) {
          case 0:
            setopenAnswerSheet(true);
            break;

          case destructiveButtonIndex:
            navigation.navigate('ResultScreen');
            break;

          case cancelButtonIndex:
        }
      },
    );
  };

  return (
    <TouchableOpacity style={styles.buttonStyle} onPress={onPress}>
      <MoreIcon />
    </TouchableOpacity>
  );
};

export default MoreButton;

const styles = StyleSheet.create({
  buttonStyle: {
    backgroundColor: hexToRgba(theme.colors.lightestFrenchBlue, 0.08),
    borderRadius: normalize(10),
    padding: normalize(8),
    width: normalize(50),
    height: normalize(50),
  },
});
