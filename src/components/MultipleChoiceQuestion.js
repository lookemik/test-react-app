import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { deleteQuestion } from '../store/slices/questions-slice'

const MultipleChoiceQuestion = ({
  question: { id, type, text, answers, questionImage },
  index,
}) => {
  const [showAnswers, setShowAnswers] = useState(false)
  const navigate = useNavigate()
  const dispatch = useDispatch()

  return (
    <li key={id} style={{ marginBottom: 20, padding: 20, border: '1px solid black' }}>
      <div>{index + 1}</div>
      <div>{type === 'multiple_choice' ? 'MULTIPLE CHOICE' : 'MATCHING'}</div>
      <div>{text}</div>
      {questionImage && <img width={100} src={questionImage} alt="question image" />}
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
        <ul>
          {answers
            .filter(answer => answer.checked)
            .map(answer => (
              <li>
                <div>{answer.text}</div>
                {answer.image && <img width={100} src={answer.image} alt="answer image" />}
              </li>
            ))}
        </ul>
      )}
    </li>
  )
}

export default MultipleChoiceQuestion
