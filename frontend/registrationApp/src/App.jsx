import {  Route, Routes } from "react-router-dom"
import Registrations from "./pages/Registrations/Registrations"
import NewRegistration from "./pages/NewRegistration/NewRegistration"
import RegistrationsContainer from "./components/RegistrationsContainer/RegistrationsContainer";
import LoginForm from "./components/LoginForm/LoginForm";
import RegisterForm from "./components/RegisterForm/RegisterForm";

function App() {
  return (
    <Routes>
      <Route path="/registrations" element={<Registrations />}/>
      <Route path="/registrations/new" element={<NewRegistration />}/>
      <Route path="/login" element={<LoginForm />} />
      <Route path="/register" element={<RegisterForm />} />
      <Route path="/registrations" element={<RegistrationsContainer />} />
      <Route path="/"  element={<LoginForm/>} />
      
   </Routes>
  )
}

  
      
      
      
      
      
      
      
      
  



export default App