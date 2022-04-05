import React, { useEffect, useRef } from 'react'
import { FormProvider, useFieldArray, useForm, useWatch } from 'react-hook-form'
import { FormMatchingQuestion } from './FormMatchingQuestion'
import { FormMatchingAnswer } from './FormMatchingAnswer'
import { FormMultipleChoiceAnswer } from './FormMultipleChoiceAnswer'

const QuestionForm = ({ question, onSubmit, onDelete, onSave }) => {
  const form = useForm({
    defaultValues: {
      ...{
        type: 'multiple_choice',
        questionImage: '',
        text: '',
        points: '1',
        answers: [],
        questionsAnswers: new Array(4).fill(0).map(() => ({ answer: '', question: '' })),
      },
      ...question,
    },
  })
  const questionImage = useWatch({ control: form.control, name: 'questionImage' })
  const type = useWatch({ control: form.control, name: 'type' })
  const answers = useFieldArray({
    control: form.control,
    name: 'answers',
  })
  const questionsAnswers = useFieldArray({
    control: form.control,
    name: 'questionsAnswers',
  })
  const questionInputFileRef = useRef(null)

  useEffect(() => {
    type === 'multiple_choice' && form.resetField('answers')
    type === 'matching' && form.resetField('questionsAnswers')
  }, [type])

  return (
    <FormProvider {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="type">1. Question Type</label>
          <select {...form.register('type')} id="type">
            <option value="multiple_choice">Multiple Choice</option>
            <option value="matching">Matching</option>
          </select>
        </div>
        {type === 'multiple_choice' && (
          <div>
            <label htmlFor="question">2. Question</label>
            <input
              {...form.register('text')}
              type="text"
              id="question"
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
                  form.setValue('questionImage', reader.result)
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
                    form.setValue('questionImage', '')
                  }}
                >
                  Delete image
                </button>
              </div>
            )}
          </div>
        )}
        {type === 'multiple_choice' && (
          <div>
            <h5>Answers (please tick the correct answers)</h5>
            {answers.fields.map((field, index) => (
              <FormMultipleChoiceAnswer key={field.id} remove={answers.remove} index={index} />
            ))}
            <button
              type={'button'}
              onClick={() => {
                answers.append({ checked: false, text: '' })
              }}
            >
              Add Answer
            </button>
          </div>
        )}
        {type === 'matching' && (
          <div>
            <h5>Questions / Answers</h5>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gridGap: 20 }}>
              <div>
                <div style={{ textAlign: 'center' }}>Question</div>
                {questionsAnswers.fields.map((field, index) => (
                  <FormMatchingQuestion key={field.id} index={index} />
                ))}
              </div>
              <div>
                <div style={{ textAlign: 'center' }}>Correct Answer</div>
                {questionsAnswers.fields.map((field, index) => (
                  <FormMatchingAnswer key={field.id} index={index} />
                ))}
              </div>
            </div>
          </div>
        )}
        <div>
          <label htmlFor="points">4. Points</label>
          <input {...form.register('points')} type="number" id="points" />
        </div>
        <div>
          <label htmlFor="comments">4. Comments</label>
          <input
            {...form.register('comments')}
            type="text"
            id="comments"
            placeholder={'Teacher comment...'}
          />
        </div>
        <div>
          <button type={'submit'} onClick={onSave}>
            Save Question
          </button>
          <button onClick={onDelete}>Delete Question</button>
        </div>
      </form>
    </FormProvider>
  )
}

export default QuestionForm
