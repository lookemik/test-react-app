import React, { useRef } from 'react'
import { useFormContext, useWatch } from 'react-hook-form'

export const FormMatchingQuestion = ({ index }) => {
  const { register, setValue, control } = useFormContext()
  const questionInputFileRef = useRef(null)
  const questionImage = useWatch({ control, name: `questionsAnswers.${index}.question.image` })

  return (
    <div>
      <span>{index + 1}</span>
      <input
        {...register(`questionsAnswers.${index}.question.text`)}
        type={'text'}
        style={{ width: '100%' }}
        placeholder={'Question Text...'}
      />
      <button
        type={'button'}
        onClick={() => {
          questionInputFileRef.current.click()
        }}
      >
        Download image
      </button>
      <input
        type="file"
        accept={'image/*'}
        ref={questionInputFileRef}
        style={{ display: 'none' }}
        onChange={event => {
          const file = event.target.files[0]
          if (!file) return
          const reader = new FileReader()
          reader.addEventListener('load', () => {
            setValue(`questionsAnswers.${index}.question.image`, reader.result)
          })
          reader.readAsDataURL(file)
          questionInputFileRef.current.value = ''
        }}
      />
      {questionImage && (
        <div>
          <img width={100} src={questionImage} alt="question image" />
          <button
            onClick={() => {
              setValue(`questionsAnswers.${index}.question.image`, '')
            }}
          >
            Delete image
          </button>
        </div>
      )}
    </div>
  )
}
