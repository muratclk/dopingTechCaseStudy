import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RootStackParamList} from '../util/types';
import QuestionScreen from '../screens/QuestionScreen';
import ResultScreen from '../screens/ResultScreen';

const Stack = createNativeStackNavigator<RootStackParamList>();

function MainStack(): JSX.Element {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Questions" component={QuestionScreen} />
      <Stack.Screen name="ResultScreen" component={ResultScreen} />
    </Stack.Navigator>
  );
}

export default MainStack;
