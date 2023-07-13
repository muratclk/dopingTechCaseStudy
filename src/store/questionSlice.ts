import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';

import data from '@data/questions.json';
import {QuestionType, addAnswerType} from '@utils/types';

const initialState: {
  questions: QuestionType[];
  currentQuestion: number;
  durationInMinute: number;
} = {questions: data, currentQuestion: 0, durationInMinute: 180};

export const counterSlice = createSlice({
  name: 'questions',
  initialState,
  reducers: {
    addAnswer: (state, action: PayloadAction<addAnswerType>) => {
      state.questions = state.questions.map(x => {
        if (x.id === action.payload.id) {
          x.userAnswer = action.payload.answer;
        }
        return x;
      });
      return state;
    },
    nextQuestion: state => {
      state.currentQuestion = Math.min(
        state.currentQuestion + 1,
        state.questions.length - 1,
      );
      return state;
    },
    prevQuestion: state => {
      state.currentQuestion = Math.max(state.currentQuestion - 1, 0);
      return state;
    },
    setDuration: (state, action: PayloadAction<number>) => {
      state.durationInMinute = action.payload;
      return state;
    },
    reset: () => initialState,
  },
});

// Action creators are generated for each case reducer function
export const {addAnswer, nextQuestion, prevQuestion, setDuration, reset} =
  counterSlice.actions;

export default counterSlice.reducer;
