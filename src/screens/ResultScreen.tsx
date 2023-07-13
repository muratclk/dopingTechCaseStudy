import React, {useCallback, useEffect} from 'react';
import {Text, StyleSheet, View, Image} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useNavigation} from '@react-navigation/native';
import {useSelector, useDispatch} from 'react-redux';

import {theme} from '@utils/theme';
import {normalize} from '@utils/scale';
import NetIcon from '@assets/icons/netIcon';
import TrueIcon from '@assets/icons/trueIcon';
import FalseIcon from '@assets/icons/falseIcon';
import EmptyIcon from '@assets/icons/emptyIcon';
import Button from '@components/Button';
import type {RootState} from '@store/store';
import {reset, setDuration} from '@store/questionSlice';
import {ScrollView} from 'react-native-gesture-handler';

const ResultScreen: React.FC = () => {
  const {questions} = useSelector((state: RootState) => state.question);
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [correct, setCorrect] = React.useState(0);
  const [wrong, setWrong] = React.useState(0);
  const [empty, setEmpty] = React.useState(0);
  const [net, setNet] = React.useState('0');

  const calculateResult = useCallback(() => {
    let correctNumber = 0;
    let wrongNumber = 0;
    let emptyNumber = 0;
    questions.forEach(question => {
      if (question.answer === question.userAnswer) {
        correctNumber++;
      } else if (!question.userAnswer) {
        emptyNumber++;
      } else {
        wrongNumber++;
      }
    });
    setCorrect(correctNumber);
    setWrong(wrongNumber);
    setEmpty(emptyNumber);
    setNet((correctNumber - wrongNumber / 4).toFixed(1).replace(/[.,]0$/, ''));
    dispatch(setDuration(0));
  }, [dispatch, questions]);

  useEffect(() => {
    calculateResult();
  }, [calculateResult]);

  const handleStartPress = () => {
    dispatch(reset());
    navigation.navigate('QuestionsScreen');
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollViewContent}
        bounces={false}>
        <Text style={styles.headerText}>Seviye Belirleme Sınav Sonucu</Text>
        <Image
          source={require('@assets/images/dopingImage.png')}
          style={styles.image}
        />
        <View style={styles.textContainer}>
          <Text style={styles.contentHeaderText}>
            Tebrikler, sınavı başarıyla tamamladın!
          </Text>
          <Text style={styles.contentText}>
            Dopi Yapay Zeka seviyeni{' '}
            <Text style={styles.levelText}>"Temel Seviye"</Text> olarak
            belirlemiştir. Seviyeni istediğin zaman ünite içerisinden
            değiştirebilirsin.
          </Text>
        </View>
        <View style={styles.resultContainer}>
          <View style={styles.resultView}>
            <View style={styles.iconView}>
              <NetIcon />
            </View>
            <Text style={styles.resultText}>{net} Net</Text>
          </View>
          <View style={styles.resultView}>
            <View style={styles.iconView}>
              <TrueIcon />
            </View>
            <Text style={styles.resultText}>{correct} Doğru</Text>
          </View>
          <View style={styles.resultView}>
            <View style={styles.iconView}>
              <FalseIcon />
            </View>
            <Text style={styles.resultText}>{wrong} Yanlış</Text>
          </View>
          <View style={styles.resultView}>
            <View style={styles.iconView}>
              <EmptyIcon />
            </View>
            <Text style={styles.resultText}>{empty} Boş</Text>
          </View>
        </View>
      </ScrollView>
      <Button
        label="Üniteye Başla"
        style={styles.buttonStyle}
        onPress={handleStartPress}
      />
    </SafeAreaView>
  );
};

export default ResultScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.lightBlue,
  },
  scrollView: {
    flex: 1,
    backgroundColor: theme.colors.lightBlue,
  },
  scrollViewContent: {
    alignItems: 'center',
    flexGrow: 1,
    paddingBottom: normalize(56, true),
  },
  headerText: {
    color: theme.colors.whiteBlue,
    fontSize: normalize(20),
    fontFamily: theme.fonts.Nunito700,
    marginVertical: normalize(40, true),
  },
  image: {
    width: normalize(64),
    height: normalize(64),
    resizeMode: 'contain',
    marginBottom: normalize(20, true),
  },
  textContainer: {
    alignItems: 'center',
    alignContent: 'center',
  },
  contentHeaderText: {
    color: theme.colors.whiteBlue,
    fontSize: normalize(18),
    fontFamily: theme.fonts.Nunito700,
    marginBottom: normalize(10, true),
    textAlign: 'center',
  },
  contentText: {
    color: theme.colors.whiteBlue,
    fontSize: normalize(14),
    fontFamily: theme.fonts.Nunito700,
    marginBottom: normalize(10, true),
    textAlign: 'center',
  },
  levelText: {
    color: theme.colors.yellow,
  },
  resultContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'center',
    marginTop: normalize(50, true),
  },
  iconView: {
    width: normalize(56),
    height: normalize(56),
    justifyContent: 'center',
    alignItems: 'center',
  },
  resultView: {
    alignItems: 'center',
    marginHorizontal: normalize(10),
  },
  resultViewFirst: {
    marginLeft: 0,
  },
  resultViewLast: {
    marginRight: 0,
  },
  resultText: {
    color: theme.colors.whiteBlue,
    fontSize: normalize(16),
    fontFamily: theme.fonts.Nunito700,
    marginTop: normalize(10, true),
  },
  buttonStyle: {
    bottom: normalize(15, true),
    paddingHorizontal: normalize(10),

    height: normalize(56, true),
  },
});
