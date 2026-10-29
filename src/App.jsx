
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import LearnUseEffect from './pages/LearnUseEffect'
import  {Home}  from './pages/Home'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/learn-useeffect"
          element={<LearnUseEffect />}
        />
      </Routes>

      </BrowserRouter>



    </>
  )
}

export default App
