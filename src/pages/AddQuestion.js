import { omit } from 'lodash-es'
import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import QuestionForm from '../components/QuestionForm'
import { addQuestion } from '../store/slices/questions-slice'

const AddQuestion = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const onSubmit = values => {
    const newQuestion =
      values.type === 'multiple_choice'
        ? omit(values, ['questionsAnswers'])
        : omit(values, ['answers'])
    dispatch(addQuestion({ ...newQuestion, points: parseInt(values.points) }))
    navigate('/questions')
  }

  const onDelete = () => {
    navigate('/questions')
  }

  return (
    <div>
      <h1>Add Question</h1>
      <QuestionForm onSubmit={onSubmit} onDelete={onDelete} />
    </div>
  )
}

export default AddQuestion
