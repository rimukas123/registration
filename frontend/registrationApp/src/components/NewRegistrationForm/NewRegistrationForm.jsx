import { useState } from "react";

export default function NewRegistrationForm({ onSubmit, registrationData }) {
    const [name, setName] = useState(registrationData?.name || "");
    const [email, setEmail] = useState(registrationData?.email || "");
    const [password, setPassword] = useState("");
    const [age, setAge] = useState(registrationData?.age || "");

    async function handleOnSubmit(e) {
        e.preventDefault();

        const body = {
            name,
            email,
            password,
            age,
        };
        onSubmit(body);
    }

    return (
        <form onSubmit={handleOnSubmit}>
            <label htmlFor="name">Name</label>
            <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                minLength={3}
                maxLength={30}
                required
            /> <br />

            <label htmlFor="email">Email</label>
            <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
            /> <br />

            <label htmlFor="password">Password</label>
            <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                minLength={8}
                maxLength={30}
                required
            /> <br />

            <label htmlFor="age">Age</label>
            <input
                type="number"
                id="age"
                value={age}
                onChange={(e) => setAge(e.target.value)}
                min={18}
                max={120}
                required
            /> <br />

            <button type="submit">Submit</button>
        </form>
    );
}
