import "./App.css";
import SignupPage from "./pages/SignupPage";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import { Navigate, Route, Routes, Outlet } from "react-router-dom";

function App() {
 
  return (
    <>
    <SignupPage/>
    <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/signup" element={<SignupPage/>}/>
      <Route path="/login" element={<LoginPage/>}/>

    </Routes>
      
    </>
  );
}

export default App;
