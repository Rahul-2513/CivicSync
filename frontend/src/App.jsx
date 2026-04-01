import { Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import Login from "./pages/Login"
import Footer from "./components/Footer"

function App() {
  return (
    <div className="min-h-screen bg-pink-100/20">
      <Navbar/>
      <Routes>
         <Route path="/" element={<Home />} />
         {/* <Route path="/report-issue" element={<div>Report Issue Page</div>} />
         <Route path="/track-issue" element={<div>Track Issue Page</div>} />
         <Route path="/dashboard" element={<div>Dashboard Page</div>} /> */}
         <Route path="/login" element={<Login />} />
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
