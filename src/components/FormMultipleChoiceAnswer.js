import React, { useRef } from 'react'
import { useFormContext, useWatch } from 'react-hook-form'

export const FormMultipleChoiceAnswer = ({ remove, index }) => {
  const { register, setValue, control } = useFormContext()
  const answerInputFileRef = useRef(null)
  const answerImage = useWatch({ control, name: `answers.${index}.image` })

  return (
    <div>
      <input {...register(`answers.${index}.checked`)} type={'checkbox'} />
      <input {...register(`answers.${index}.text`)} type={'text'} placeholder={'Answer text...'} />
      <button
        type={'button'}
        onClick={() => {
          remove(index)
        }}
      >
        Delete Answer
      </button>
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
            setValue(`answers.${index}.image`, reader.result)
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
              setValue(`answers.${index}.image`, '')
            }}
          >
            Delete image
          </button>
        </div>
      )}
    </div>
  )
}
