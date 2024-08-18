import axios from "axios";
import NewRegistrationForm from "../../components/NewRegistrationForm/NewRegistrationForm";

const API_URL = import.meta.env.VITE_API_URL;

export default function NewRegistration() {

  
  async function handleSubmit(body) {
    await axios.post(`${API_URL}registrations`, body);
  }

  
  

  return (
    <div>
      <NewRegistrationForm onSubmit={handleSubmit}/>
    </div>
  )
}