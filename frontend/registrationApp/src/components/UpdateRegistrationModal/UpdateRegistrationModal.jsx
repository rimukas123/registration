import ReactDOM from "react-dom";
import NewRegistrationForm from "../NewRegistrationForm/NewRegistrationForm";
import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

export default function UpdateRegistrationModal({ registrationData, refetchData, onClose }) {
  async function updateRegistration(body) {
    try {
      await axios.put(`${API_URL}registrations/${registrationData._id}`, body);
      refetchData();
      onClose();
    } catch (error) {
      alert(error.message);
    }
  }

  return ReactDOM.createPortal(
    <div>
      <NewRegistrationForm onSubmit={updateRegistration} registrationData={registrationData} />
    </div>,
    document.body
  );
}
