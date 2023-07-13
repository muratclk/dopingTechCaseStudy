import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import {useCountdown} from '../hooks/countdown';
import {normalize} from '@utils/scale';
import {theme} from '@utils/theme';
import {TimerProps} from '@utils/types';

const Timer: React.FC<TimerProps> = ({durationInMinute}) => {
  const [hours, minutes, seconds] = useCountdown(durationInMinute);

  return (
    <View>
      <Text style={styles.timerText}>
        {hours}:{minutes}:{seconds}sn
      </Text>
    </View>
  );
};

export default Timer;

const styles = StyleSheet.create({
  timerText: {
    fontSize: normalize(20),
    color: theme.colors.lightFrenchBlue,
    fontFamily: theme.fonts.Nunito700,
  },
});
