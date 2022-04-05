import { omit } from 'lodash-es'
import React, { useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import QuestionForm from '../components/QuestionForm'
import { deleteQuestion, editQuestion } from '../store/slices/questions-slice'

const EditQuestion = () => {
  const { questionId } = useParams()
  const questions = useSelector(state => state.questions.questions)
  const question = useMemo(
    () => questions.find(question => question.id === questionId),
    [questions]
  )
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const onSubmit = values => {
    const newQuestion =
      values.type === 'multiple_choice'
        ? omit(values, ['questionsAnswers'])
        : omit(values, ['answers'])
    dispatch(editQuestion({ ...newQuestion, points: parseInt(values.points) }))
    navigate('/questions')
  }

  const onDelete = () => {
    dispatch(deleteQuestion({ id: question.id }))
    navigate('/questions')
  }

  return (
    <div>
      <h1>Edit Question</h1>
      <QuestionForm question={question} onSubmit={onSubmit} onDelete={onDelete} />
    </div>
  )
}

export default EditQuestion
