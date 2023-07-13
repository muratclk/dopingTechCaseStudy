import React, {useState} from 'react';
import {StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

import Header from '@components/Header';
import Question from '@components/Question';
import QuestionButtons from '@components/QuestionButtons';
import {theme} from '@utils/theme';
import AnswerSheet from '@components/answerSheet';

const QuestionScreen: React.FC = () => {
  const [openAnswerSheet, setopenAnswerSheet] = useState<boolean>(false);

  return (
    <SafeAreaView style={styles.container}>
      <Header setopenAnswerSheet={setopenAnswerSheet} />
      <Question />
      <QuestionButtons />
      {openAnswerSheet && (
        <AnswerSheet setopenAnswerSheet={setopenAnswerSheet} />
      )}
    </SafeAreaView>
  );
};

export default QuestionScreen;

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: theme.colors.lightBlue},
});
