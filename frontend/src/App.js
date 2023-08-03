import RegisterPage from "./pages/auth/RegisterPage";
import LoginPage from "./pages/auth/LoginPage";
import ProtectRoute from "./pages/auth/ProtectRoute";
import Home from "./pages/home/Index"
import { Route, Routes, Navigate } from "react-router-dom"
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import UpdateItinerary from "./components/common/UpdateItinerary";

function App() {
  return (
    <>
    <Routes>
      <Route path="/auth/register" element={<RegisterPage/>}/>
      <Route path="/auth/login" element={<LoginPage/>}/>
      <Route element={<ProtectRoute/>}>
        <Route path="/" element={<Home/>} />
        <Route path="/itineraries/update/:id" element={<UpdateItinerary/>} />
      </Route>
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
    <ToastContainer />
    </>
  );
}

export default App;
