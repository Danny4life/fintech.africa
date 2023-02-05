import { BrowserRouter, Route, Routes } from "react-router-dom"
import Homepage from "./pages/landing-page/Homepage"
// import Hamburger from "./pages/login/Hamburger"


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route exact path="homepage"  element={<Homepage />}/>
        {/* <Route exact path="hamburger"  element={ <Hamburger />}/> */}
      </Routes>
      </BrowserRouter>
      
     
    </div>
  )
}

export default App
