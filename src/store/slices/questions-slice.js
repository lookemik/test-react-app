import { createSlice } from '@reduxjs/toolkit'
import { nanoid } from 'nanoid'

const initialState = {
  questions: [],
}

export const questionsSlice = createSlice({
  name: 'questions',
  initialState,
  reducers: {
    addQuestion: {
      reducer: (state, { payload }) => {
        state.questions.push(payload)
      },
      prepare: newQuestion => {
        const id = nanoid()
        return { payload: { id, ...newQuestion } }
      },
    },
    deleteQuestion(state, { payload }) {
      state.questions = state.questions.filter(question => question.id !== payload.id)
    },
    editQuestion(state, { payload }) {
      state.questions = state.questions.map(question =>
        question.id === payload.id ? payload : question
      )
    },
    setQuestions(state) {
      state.questions = localStorage.getItem('questions')
        ? JSON.parse(localStorage.getItem('questions'))
        : []
    },
  },
})

export const { addQuestion, deleteQuestion, setQuestions, editQuestion } = questionsSlice.actions

export default questionsSlice.reducer
