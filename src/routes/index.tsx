import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {RootStackParamList} from '@utils/types';
import QuestionScreen from '@screens/QuestionScreen';
import ResultScreen from '@screens/ResultScreen';

//For useNavigation type warning
declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

const Stack = createNativeStackNavigator<RootStackParamList>();

const MainStack: React.FC = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="QuestionsScreen" component={QuestionScreen} />
      <Stack.Screen name="ResultScreen" component={ResultScreen} />
    </Stack.Navigator>
  );
};

export default MainStack;
