import React, {useState, useEffect, useRef} from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';

import BrushIcon from '@assets/icons/brushIcon';
import ZoomInIcon from '@assets/icons/zoomInIcon';
import ZoomOutIcon from '@assets/icons/zoomOutIcon';
import {theme} from '@utils/theme';
import {normalize} from '@utils/scale';
import OptionButton from '@components/OptionButton';
import type {RootState} from '@store/store';
import {addAnswer} from '@store/questionSlice';

const Question: React.FC = () => {
  const {questions, currentQuestion} = useSelector(
    (state: RootState) => state.question,
  );
  const dispatch = useDispatch();
  const [question, setQuestion] = useState(questions[currentQuestion]);
  const scrollViewRef = useRef<ScrollView>(null);

  useEffect(() => {
    setQuestion(questions[currentQuestion]);
  }, [questions, currentQuestion, scrollViewRef]);

  useEffect(() => {
    scrollViewRef?.current?.scrollTo({y: 0, animated: true});
  }, [question.id]);

  const handleSelectOption = (answer: string) => {
    dispatch(addAnswer({id: question.id, answer}));
  };

  return (
    <View style={styles.container}>
      <ScrollView
        ref={scrollViewRef}
        style={styles.questionScroll}
        contentContainerStyle={styles.questionScrollContainer}>
        <View style={styles.headerContainer}>
          <View>
            <View style={styles.questionNumber}>
              <Text style={styles.questionNumberText}>Soru: {question.id}</Text>
            </View>
          </View>
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={[styles.button, styles.buttonFirst]}>
              <BrushIcon />
            </TouchableOpacity>
            <TouchableOpacity style={[styles.button, styles.buttonFirst]}>
              <ZoomInIcon />
            </TouchableOpacity>
            <TouchableOpacity style={[styles.button, styles.buttonFirst]}>
              <ZoomOutIcon />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.questionContainer}>
          <Text>
            {question.description?.map(x => (
              <Text
                key={x.id}
                style={[
                  styles.descriptionText,
                  x.bold && styles.bold,
                  x.underline && styles.underline,
                ]}>
                {x.text}
              </Text>
            ))}
            {'\n\n'}
            {question.question?.map(x => (
              <Text
                key={x.id}
                style={[
                  styles.questionText,
                  x.bold && styles.bold,
                  x.underline && styles.underline,
                ]}>
                {x.text}
              </Text>
            ))}
          </Text>

          <View style={styles.optionsContainer}>
            {question.options?.map(x => (
              <OptionButton
                key={x.id}
                data={x}
                handleSelectOption={handleSelectOption}
                checked={question.userAnswer === x.id}
              />
            ))}
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Question;

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.darkestBlue,
    flex: 1,
  },
  questionScroll: {
    width: '100%',
    height: '100%',
    paddingHorizontal: normalize(10),
    paddingVertical: normalize(21),
  },
  questionScrollContainer: {
    paddingBottom: normalize(110, true),
  },
  headerContainer: {
    flexDirection: 'row',
  },
  questionNumber: {
    paddingHorizontal: normalize(10),
    paddingVertical: normalize(6),
    backgroundColor: theme.colors.darkerBlue,
    borderRadius: normalize(5),
  },
  questionNumberText: {
    color: theme.colors.frenchBlue,
    fontSize: normalize(12),
    fontFamily: theme.fonts.Nunito600,
    fontWeight: '600',
  },
  buttonContainer: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'flex-end',
  },
  button: {
    width: normalize(40),
    height: normalize(40),
    padding: normalize(9),
    backgroundColor: theme.colors.lighterBlue,
    borderRadius: normalize(10),
  },
  buttonFirst: {
    marginRight: normalize(5),
  },
  buttonLast: {marginLeft: normalize(5)},
  questionContainer: {
    marginTop: normalize(14),
    // paddingHorizontal: normalize(10),
  },
  bold: {
    fontFamily: theme.fonts.Nunito600,
    fontWeight: '600',
  },
  underline: {
    textDecorationLine: 'underline',
  },
  descriptionText: {
    color: theme.colors.lightestFrenchBlue,
    fontFamily: theme.fonts.Nunito400,
    fontSize: normalize(16),
    lineHeight: normalize(28),
  },
  questionText: {
    color: theme.colors.lightestFrenchBlue,
    fontFamily: theme.fonts.Nunito400,
    fontSize: normalize(16),
    lineHeight: normalize(28),
  },
  optionsContainer: {
    marginTop: normalize(30, true),
    flex: 1,
  },
});
