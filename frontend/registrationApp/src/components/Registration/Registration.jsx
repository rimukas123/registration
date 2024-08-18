import axios from "axios";
import UpdateRegistrationModal from "../UpdateRegistrationModal/UpdateRegistrationModal";
import { useState } from "react";

const API_URL = import.meta.env.VITE_API_URL;

export default function Registration({ registrationData, refetchData }) {
  const [showUpdateModal, setShowUpdateModal] = useState(false);

  async function handleDelete() {
    const shouldDelete = confirm(`Ar tikrai norite ištrinti ${registrationData.name} registraciją?`);

    if (shouldDelete) {
      try {
        await axios.delete(`${API_URL}registrations/${registrationData._id}`);
        refetchData();
      } catch (error) {
        alert(error.message);
      }
    }
  }

  return (
    <>
      <tr>
        <td>{registrationData.name}</td>
        <td>{registrationData.email}</td>
        <td>{registrationData.age}</td>
        <td>
          <button onClick={handleDelete}>Ištrinti</button>
        </td>
        <td>
          <button onClick={() => setShowUpdateModal(true)}>Atnaujinti</button>
        </td>
      </tr>
      {showUpdateModal && (
        <UpdateRegistrationModal
          refetchData={refetchData}
          registrationData={registrationData}
          onClose={() => setShowUpdateModal(false)}
        />
      )}
    </>
  );
}
