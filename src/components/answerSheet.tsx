import React, {useMemo, useRef} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import BottomSheet, {BottomSheetScrollView} from '@gorhom/bottom-sheet';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useSelector} from 'react-redux';

import ThreeCubeIcon from '@assets/icons/threeCubeIcon';
import {normalize} from '@utils/scale';
import {theme} from '@utils/theme';
import AnswerColumn from '@components/answerColumn';
import type {RootState} from '@store/store';
import {AnswerSheetProps} from '@utils/types';

const AnswerSheet: React.FC<AnswerSheetProps> = ({setopenAnswerSheet}) => {
  const sheetRef = useRef<BottomSheet>(null);
  const {questions} = useSelector((state: RootState) => state.question);

  const snapPoints = useMemo(() => ['100%'], []);

  const onClose = () => setopenAnswerSheet(false);

  return (
    <SafeAreaView style={styles.safeContainer}>
      <View style={styles.container}>
        <BottomSheet
          ref={sheetRef}
          index={0}
          enablePanDownToClose={true}
          onClose={onClose}
          handleIndicatorStyle={styles.handleIndicator}
          snapPoints={snapPoints}
          backgroundStyle={styles.bottomSheetBackground}
          style={styles.bottomSheet}>
          <View style={styles.descriptionContainer}>
            <View style={styles.icon}>
              <ThreeCubeIcon />
            </View>
            <View style={styles.textContainer}>
              <Text style={styles.lecture}>Temel Kavramlar</Text>
              <Text style={styles.questionNumber}>{questions.length} Soru</Text>
            </View>
          </View>
          <BottomSheetScrollView>
            {questions.map(
              item => (
                <AnswerColumn key={item.id} item={item} />
              ),
              [],
            )}
          </BottomSheetScrollView>
        </BottomSheet>
      </View>
    </SafeAreaView>
  );
};

export default AnswerSheet;

const styles = StyleSheet.create({
  safeContainer: {
    backgroundColor: 'rgba(0,0,0,0.65)',

    zIndex: 999,
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    top: 0,
  },
  container: {
    height: '100%',
    width: '100%',
    paddingTop: normalize(24, true),
  },
  descriptionContainer: {
    flexDirection: 'row',
    marginBottom: normalize(18, true),
  },
  textContainer: {
    alignItems: 'flex-start',
    marginLeft: normalize(12),
  },
  lecture: {
    color: theme.colors.lightestFrenchBlue,
    fontSize: normalize(16),
    fontFamily: theme.fonts.Nunito600,
    marginVertical: normalize(2.5),
  },
  questionNumber: {
    color: theme.colors.frenchBlue,
    fontSize: normalize(12),
    fontFamily: theme.fonts.Nunito400,
    marginVertical: normalize(2.5),
  },
  handleIndicator: {
    width: normalize(44),
    borderRadius: normalize(10),
    backgroundColor: theme.colors.white,
  },
  bottomSheet: {
    padding: normalize(15),
  },
  bottomSheetBackground: {
    backgroundColor: theme.colors.lightBlue,
  },
  icon: {
    width: normalize(48),
    height: normalize(48),
  },
});
