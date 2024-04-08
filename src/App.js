import "./App.css";
import SignupPage from "./pages/SignupPage";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import { Navigate, Route, Routes, Outlet } from "react-router-dom";
import WelcomePage from "./pages/WelcomePage";

function App() {
 
  return (
    <>
    <Routes>
      <Route path="/" element={<WelcomePage/>}/>
      <Route path="/home" element={<HomePage/>}/>
      {/* <Route path="/signup" element={<SignupPage/>}/> */}
      {/* <Route path="/login" element={<LoginPage/>}/> */}

    </Routes>
      
    </>
  );
}

export default App;
