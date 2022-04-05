import React, { useRef } from 'react'
import { useFormContext, useWatch } from 'react-hook-form'

export const FormMatchingAnswer = ({ index }) => {
  const { register, setValue, control } = useFormContext()
  const answerInputFileRef = useRef(null)
  const answerImage = useWatch({ control, name: `questionsAnswers.${index}.answer.image` })

  return (
    <div>
      <input
        {...register(`questionsAnswers.${index}.answer.text`)}
        type={'text'}
        style={{ width: '100%' }}
        placeholder={'Question Text...'}
      />
      <button
        type={'button'}
        onClick={() => {
          answerInputFileRef.current.click()
        }}
      >
        Download image
      </button>
      <input
        type='file'
        accept={'image/*'}
        ref={answerInputFileRef}
        style={{ display: 'none' }}
        onChange={event => {
          const file = event.target.files[0]
          if (!file) return
          const reader = new FileReader()
          reader.addEventListener('load', () => {
            setValue(`questionsAnswers.${index}.answer.image`, reader.result)
          })
          reader.readAsDataURL(file)
          answerInputFileRef.current.value = ''
        }}
      />
      {answerImage && (
        <div>
          <img width={100} src={answerImage} alt='answer image' />
          <button
            onClick={() => {
              setValue(`questionsAnswers.${index}.answer.image`, '')
            }}
          >
            Delete image
          </button>
        </div>
      )}
    </div>
  )
}
