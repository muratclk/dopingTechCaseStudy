import {configureStore} from '@reduxjs/toolkit';

import questionsReducer from './questionSlice';

export const store = configureStore({
  reducer: {
    question: questionsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
