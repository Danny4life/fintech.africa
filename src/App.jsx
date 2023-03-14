import { BrowserRouter, Route, Routes } from "react-router-dom"
import Dashboard from "./pages/dashboard/Dashboard"
import EmailVerification from "./pages/email-verification/EmailVerification"
import Homepage from "./pages/landing-page/Homepage"
import LocalTrasnfer from "./pages/local-bank-transfer/LocalTransfer"
import Login from "./pages/login/Login"
import OtherBankTransfer from "./pages/other-bank-transfer/OtherBankTransfer"
import PasswordReset from "./pages/password-reset-verification/PasswordReset"
import PasswordResetVerification from "./pages/password-reset-verification/PasswordResetVerification"
import UserProfile from "./pages/profile/UserProfile"
//import UserProfile from "./pages/profile/UserProfile"
import ResetPassword from "./pages/reset-password/ResetPassword"
import Signup from "./pages/signup/Signup"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function App() {
  return (
    <div className="App">
       <ToastContainer
        autoClose={2000}
        hideProgressBar={false}
        position="top-right"
        theme="dark" 
       />
      <BrowserRouter>
      <Routes>
        <Route index="/" element={<Homepage />}/>
        <Route exact path="/signup"  element={<Signup />}/>
        <Route exact path="/email-verification"  element={<EmailVerification />}/>
        <Route exact path="/login"  element={<Login />}/>
        <Route exact path="/password-reset"  element={<PasswordReset />}/>
        <Route exact path="/password-reset-verification"  element={<PasswordResetVerification />}/>
        <Route exact path="/dashboard"  element={<Dashboard />}/>
        <Route exact path="/reset-password"  element={<ResetPassword />}/>
        <Route exact path="/local-bank-transfer"  element={<LocalTrasnfer />}/>
        <Route exact path="/other-bank-transfer"  element={<OtherBankTransfer />}/>
        <Route exact path="/profile/:id"  element={<UserProfile />}/>
      </Routes>
      </BrowserRouter>
      
     
    </div>
  )
}

export default App
