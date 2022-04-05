import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { deleteQuestion } from '../store/slices/questions-slice'

const MatchingQuestion = ({ question: { id, type, questionsAnswers }, index }) => {
  const [showAnswers, setShowAnswers] = useState(false)
  const navigate = useNavigate()
  const dispatch = useDispatch()

  return (
    <li key={id} style={{ marginBottom: 20, padding: 20, border: '1px solid black' }}>
      <div>{index + 1}</div>
      <div>{type === 'multiple_choice' ? 'MULTIPLE CHOICE' : 'MATCHING'}</div>
      <ol>
        {questionsAnswers.map(qa => (
          <li>
            <div>{qa.question.text}</div>
            {qa.question.image && <img width={100} src={qa.question.image} alt="question image" />}
          </li>
        ))}
      </ol>
      <button
        onClick={() => {
          navigate(`/questions/edit-question/${id}`)
        }}
      >
        Edit
      </button>
      <button
        onClick={() => {
          dispatch(deleteQuestion({ id }))
        }}
      >
        Delete
      </button>
      <button
        onClick={() => {
          setShowAnswers(prev => !prev)
        }}
      >
        {showAnswers ? 'Hide Answer(s)' : 'Show Answer(s)'}
      </button>
      {showAnswers && (
        <ol>
          {questionsAnswers.map(qa => (
            <li>
              <div>{qa.answer.text}</div>
              {qa.answer.image && <img width={100} src={qa.answer.image} alt="answer image" />}
            </li>
          ))}
        </ol>
      )}
    </li>
  )
}

export default MatchingQuestion
