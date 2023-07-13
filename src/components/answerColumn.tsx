import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import {normalize} from '@utils/scale';
import {theme} from '@utils/theme';
import {AnswerColumnProps} from '@utils/types';

const AnswerColumn: React.FC<AnswerColumnProps> = ({item}) => {
  const options = ['A', 'B', 'C', 'D', 'E'];

  return (
    <View style={styles.container}>
      <Text style={styles.questionNumber}>{item.id}. Soru</Text>
      <View style={styles.optionContainer}>
        {options.map((option, index) => (
          <View
            key={index}
            style={[
              styles.optionView,
              item.userAnswer === option && styles.selectedOptionView,
            ]}>
            <Text
              style={[
                styles.optionText,
                item.userAnswer === option && styles.selectedOptionText,
              ]}>
              {option}
            </Text>
          </View>
        ))}
      </View>
    </View>
  );
};

export default AnswerColumn;

const styles = StyleSheet.create({
  container: {
    height: normalize(60, true),
    backgroundColor: theme.colors.darkestBlue,
    borderRadius: normalize(10),
    marginVertical: normalize(1.5, true),
    marginRight: normalize(5),
    paddingHorizontal: normalize(5),
    flexDirection: 'row',
    alignItems: 'center',
    alignContent: 'center',
  },
  questionNumber: {
    color: theme.colors.frenchBlue,
    fontFamily: theme.fonts.Nunito600,
    fontSize: normalize(14),
    flex: 1,
    alignSelf: 'center',
    textAlign: 'center',
  },
  optionContainer: {
    flexDirection: 'row',
  },
  optionView: {
    width: normalize(40),
    height: normalize(40),
    marginHorizontal: normalize(5),
    borderRadius: normalize(20),
    borderWidth: normalize(1),
    borderColor: theme.colors.borderBlue,
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'center',
  },
  optionText: {
    color: theme.colors.frenchBlue,
    fontSize: normalize(16),
    fontFamily: theme.fonts.Nunito700,
  },
  selectedOptionView: {
    backgroundColor: theme.colors.optionBlue,
    borderColor: theme.colors.optionBlue,
  },
  selectedOptionText: {
    color: theme.colors.white,
  },
});
