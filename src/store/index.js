import { configureStore } from '@reduxjs/toolkit'
import questionsReducer from './slices/questions-slice'

const localStorageQuestionsMiddleware = store => next => action => {
  next(action)
  localStorage.setItem('questions', JSON.stringify(store.getState().questions.questions))
}

export const store = configureStore({
  reducer: {
    questions: questionsReducer,
  },
  middleware: [localStorageQuestionsMiddleware],
  devTools: process.env.NODE_ENV === 'development',
})
