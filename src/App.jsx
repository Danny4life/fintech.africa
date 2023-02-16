import { BrowserRouter, Route, Routes } from "react-router-dom"
import Homepage from "./pages/landing-page/Homepage"
import Signup from "./pages/signup/Signup"



function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route exact path="homepage"  element={<Homepage />}/>
        <Route exact path="signup"  element={<Signup />}/>
      </Routes>
      </BrowserRouter>
      
     
    </div>
  )
}

export default App
