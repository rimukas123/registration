import { useEffect, useState } from "react";
import { useNavigate} from "react-router-dom";
import axios from "axios";
import Registration from "../Registration/Registration";

const API_URL = import.meta.env.VITE_API_URL;

export default function RegistrationsContainer() {
  const [registrations, setRegistrations] = useState([]);
  const navigate = useNavigate();


  useEffect(() => {
    const userInfo = localStorage.getItem("userInfo");

    if (!userInfo) {
        navigate("/login");
    } else {
        getRegistrations();
    }
}, []);


  async function getRegistrations() {
    try {
      const response = await axios.get(API_URL + "registrations");
      setRegistrations(response.data);
    } catch (err) {
      alert("Something went wrong: " + err.message);
    }
  }

  useEffect(() => {
    getRegistrations();
  }, []);

  return (
    <div className="container">
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Age</th>
          
        </tr>
      </thead>
      <tbody>
        {registrations.map((registration) => (
          <Registration key={registration._id} registrationData={registration} refetchData={getRegistrations} />
        ))}
      </tbody>
    </table>
    </div>
  );
}
