import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import MatchingQuestion from '../components/MatchingQuestion'
import MultipleChoiceQuestion from '../components/MultipleChoiceQuestion'

const Questions = () => {
  const navigate = useNavigate()
  const questions = useSelector(state => state.questions.questions)

  return (
    <div style={{ display: 'flex' }}>
      <div style={{ flex: 1 }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr' }}>
          {/* <div>
            <p>Grade</p>
            <p>Grade 1</p>
          </div>
          <div>
            <p>Course</p>
            <p>Biology</p>
          </div>
          <div>
            <p>Subject area</p>
            <p>Science</p>
          </div>
          <div>
            <p>Amount of Time to Complete the Exam </p>
            <p>180 minutes</p>
          </div> */}

<div className="frame-1485">
      <div className="frame-1595">
        <div className="counter-1">
          <img className="graduation-cap_1f393-1" src="graduation-cap-1f393-1.png" />
          <div className="frame-1594-2">
            <div className="title-4poppins-normal-elephant-12px">
              Grade
            </div>
            <div className="title-3poppins-semi-bold-steel-blue-18px">
              Grade 1
            </div>
          </div>
        </div>
        <div className="counter-2">
          <img className="books_1f4da-1" src="books-1f4da-1.png" />
          <div className="frame-1594-3">
            <div className="title-5poppins-normal-elephant-12px">
              Subject Area
            </div>
            <div className="title-3poppins-semi-bold-steel-blue-18px">
              Science
            </div>
          </div>
        </div>
      </div>
      <Counter
        pageFacingUp_1F4C41="page-facing-up-1f4c4-1.png"
        title1="Course"
        title2="Biology"
        unsplashC8Ta0Gwpbqg="unsplash-c8ta0gwpbqg.png"
        title3="Amount of Time to Complete the Exam"
        title4="180 minutes"
      />
    </div>
          
        </div>
        <h4>Questions ({questions.length})</h4>
        <button onClick={() => navigate('add-question')}>Add Question</button>
        <ul>
          {questions.map((question, index) =>
            question.type === 'multiple_choice' ? (
              <MultipleChoiceQuestion key={question.id} question={question} index={index} />
            ) : (
              <MatchingQuestion key={question.id} question={question} index={index} />
            )
          )}
        </ul>
      </div>
      <div>
        <p>Assigned Teachers</p>
        <input type="text" />
        <button>Assign To Class</button>
      </div>
    </div>
  )
}

export default Questions

function Counter(props) {
  const { pageFacingUp_1F4C41, title1, title2, unsplashC8Ta0Gwpbqg, title3, title4 } = props;

  return (
    <div className="counter">
      <div className="frame-1601">
        <img className="page-facing-up_1f4c4-1" src={pageFacingUp_1F4C41} />
        <div className="frame-1594">
          <div className="title-1poppins-normal-elephant-12px">
            {title1}
          </div>
          <div className="titlepoppins-semi-bold-steel-blue-20px">
            {title2}
          </div>
        </div>
      </div>
      <div className="frame-1612"></div>
      <div className="frame-1611">
        <div
          className="unsplashc8-ta0gw-pb-qg"
          style={{ backgroundImage: `url(${unsplashC8Ta0Gwpbqg})` }}
        ></div>
        <div className="frame-1594-1">
          <p className="title-2poppins-normal-elephant-12px">
            {title3}
          </p>
          <div className="titlepoppins-semi-bold-steel-blue-20px">
            {title4}
          </div>
        </div>
      </div>
    </div>
  );
}