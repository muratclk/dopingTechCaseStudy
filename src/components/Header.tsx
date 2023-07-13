import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {useSelector} from 'react-redux';

import BackButton from '@components/BackButton';
import MoreButton from '@components/MoreButton';
import Timer from '@components/Timer';
import {normalize} from '@utils/scale';
import ProgressBar from '@components/ProgressBar';
import {theme} from '@utils/theme';
import type {RootState} from '@store/store';
import {useFocusEffect} from '@react-navigation/native';
import {HeaderProps} from '@utils/types';

const Header: React.FC<HeaderProps> = ({setopenAnswerSheet}) => {
  const {questions, currentQuestion, durationInMinute} = useSelector(
    (state: RootState) => state.question,
  );
  const [duration, setDuration] = React.useState(durationInMinute);

  useFocusEffect(
    React.useCallback(() => {
      setDuration(durationInMinute);
      return () => {
        setDuration(0);
      };
    }, [durationInMinute]),
  );

  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <BackButton />
        <Timer durationInMinute={duration} />
        <MoreButton setopenAnswerSheet={setopenAnswerSheet} />
      </View>
      <View style={styles.dataContainer}>
        <View style={styles.textContainer}>
          <Text style={styles.lectureText}>
            Temel Kavramlar Seviye Belirleme Sınavı
          </Text>
          <Text style={styles.progressText}>
            {currentQuestion + 1}/{questions.length}
          </Text>
        </View>

        <ProgressBar
          height={normalize(5, true)}
          step={currentQuestion + 1}
          steps={questions.length}
        />
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {backgroundColor: theme.colors.lightBlue},
  buttonContainer: {
    flexDirection: 'row',
    padding: normalize(10),
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: normalize(10),
  },
  dataContainer: {
    alignItems: 'center',
    padding: normalize(10),
  },
  textContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    paddingTop: normalize(10),
    paddingBottom: normalize(8),
  },
  lectureText: {
    color: theme.colors.lightestFrenchBlue,
    fontSize: normalize(13),
    fontFamily: theme.fonts.Nunito600,
  },
  progressText: {
    color: theme.colors.yellow,
    fontSize: normalize(13),
    fontFamily: theme.fonts.Nunito600,
  },
});
