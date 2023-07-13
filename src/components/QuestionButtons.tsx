import React from 'react';
import {StyleSheet, View, Platform} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {BlurView} from '@react-native-community/blur';
import {useSelector, useDispatch} from 'react-redux';

import {theme} from '@utils/theme';
import Button from './Button';
import {normalize} from '@utils/scale';
import type {RootState} from '@store/store';
import {nextQuestion, prevQuestion} from '@store/questionSlice';

const QuestionButtons: React.FC = () => {
  const {currentQuestion, questions} = useSelector(
    (state: RootState) => state.question,
  );
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const isLast = currentQuestion === questions.length - 1;

  const handlePrevQuestion = () => dispatch(prevQuestion());
  const handleNextQuestion = () => dispatch(nextQuestion());
  const handleFinishTest = () => navigation.navigate('ResultScreen');

  return (
    <View style={styles.container}>
      <BlurView
        style={styles.blurView}
        // overlayColor="transparent"
        blurType="dark"
        blurAmount={3}
        reducedTransparencyFallbackColor={theme.colors.darkestBlue}
      />
      <View style={styles.buttonContainer}>
        <View style={styles.buttonView}>
          {currentQuestion > 0 && (
            <Button label="Önceki Soru" preIcon onPress={handlePrevQuestion} />
          )}
        </View>
        <View style={styles.buttonView}>
          {isLast ? (
            <Button label="Testi Bitir" success onPress={handleFinishTest} />
          ) : (
            <Button
              label="Sonraki Soru"
              suffixIcon
              onPress={handleNextQuestion}
            />
          )}
        </View>
      </View>
    </View>
  );
};

export default QuestionButtons;

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    width: '100%',
    overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
  },
  buttonContainer: {
    paddingHorizontal: normalize(10),
    paddingVertical: normalize(15, true),
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  buttonView: {
    width: normalize(135),
    height: normalize(44),
  },

  blurView: {
    position: 'absolute',
    left: 0,
    bottom: 0,
    right: 0,
    width: '100%',
    height: '100%',
    // backgroundColor: hexToRgba(theme.colors.darkestBlue, 1),
  },
});
