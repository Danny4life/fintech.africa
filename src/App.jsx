import { BrowserRouter, Route, Routes } from "react-router-dom"
import EmailVerification from "./pages/email-verification/EmailVerification"
import Homepage from "./pages/landing-page/Homepage"
import Login from "./pages/login/Login"
import PasswordReset from "./pages/password-reset-verification/PasswordReset"
import PasswordResetVerification from "./pages/password-reset-verification/PasswordResetVerification"
import Signup from "./pages/signup/Signup"



function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route index="/" element={<Homepage />}/>
        <Route exact path="/signup"  element={<Signup />}/>
        <Route exact path="/email-verification"  element={<EmailVerification />}/>
        <Route exact path="/login"  element={<Login />}/>
        <Route exact path="/password-reset"  element={<PasswordReset />}/>
        <Route exact path="/password-reset-verification"  element={<PasswordResetVerification />}/>
      </Routes>
      </BrowserRouter>
      
     
    </div>
  )
}

export default App
