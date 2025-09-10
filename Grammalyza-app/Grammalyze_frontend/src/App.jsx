import { BrowserRouter, Route, Routes } from "react-router-dom"
import Landingpage from "./Pages/Landingpage"
import NavBar from "./Components/NavBar"
import Footer from "./Components/Footer"
import Signup from "./Pages/Signup"
import { Toaster } from "react-hot-toast"
import Login from "./Pages/Login"
import ChatBot from "./Pages/ChatBot"
import Feedback from "./Pages/Feedback"
import Result from "./Pages/Result"
import PrivateRoute from "./PrivateRoute"
import About from "./Pages/About"
import Logout from "./Pages/Logout"


function App() {
  

  return (
    <>
      <BrowserRouter>
      <Toaster />
       <NavBar />
       <Routes>
         <Route path="/" element={<Landingpage />} />
         <Route path="/about" element={<About />} />
         <Route path="/signup" element={<PrivateRoute IsPublic={true}><Signup /></PrivateRoute>} />
         <Route path="/login" element={<PrivateRoute IsPublic={true} ><Login /></PrivateRoute>} />
         <Route path="/chatbot" element={<PrivateRoute IsPublic={false} ><ChatBot /></PrivateRoute>} />
         <Route path="/feedback" element={<PrivateRoute IsPublic={false}><Feedback /></PrivateRoute>} />
         <Route path="/result" element={<PrivateRoute IsPublic={false} ><Result /></PrivateRoute>} />
         <Route path="/logout" element={<PrivateRoute IsPublic={false}><Logout /></PrivateRoute>} />
       </Routes>
       <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
