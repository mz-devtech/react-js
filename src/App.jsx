
import './App.css'
import { BrowserRouter, Router, Route } from "react-router-dom"
import LearnUseEffect from './pages/LearnUseEffect'


function App() {

  return (
    <>
      <BrowserRouter>
        <Route path="/learn-useeffect" element={<LearnUseEffect />} />


      </BrowserRouter>



    </>
  )
}

export default App
