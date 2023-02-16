import { BrowserRouter, Route, Routes } from "react-router-dom"
import EmailVerification from "./pages/email-verification/EmailVerification"
import Homepage from "./pages/landing-page/Homepage"
import Signup from "./pages/signup/Signup"



function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route index="/" element={<Homepage />}/>
        <Route exact path="/signup"  element={<Signup />}/>
        <Route exact path="/email-verification"  element={<EmailVerification />}/>
      </Routes>
      </BrowserRouter>
      
     
    </div>
  )
}

export default App
