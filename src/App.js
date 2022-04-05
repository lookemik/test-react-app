import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MainMenu from './components/MainMenu'
import Layout from './components/Layout'
import AddQuestion from './pages/AddQuestion'
import EditQuestion from './pages/EditQuestion'
import NotFound from './pages/NotFound'
import Questions from './pages/Questions'
import { setQuestions } from './store/slices/questions-slice'

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(setQuestions())
  }, [])

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="questions">
            <Route path="add-question" element={<AddQuestion />} />
            <Route path="edit-question/:questionId" element={<EditQuestion />} />
            <Route index element={<Questions />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
