import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState("");
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  const validate = () => {
    let err = {};
    if (!name) err.name = "Name is required";
    if (!email) err.email = "Email is required";
    if (password.length < 6)
      err.password = "Password must be 6+ characters";
    return err;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const err = validate();

    if (Object.keys(err).length > 0) {
      setErrors(err);
      setSuccess("");
    } else {
      setErrors({});
      setSuccess("Registration Successful!");
    }
  };

  return (
    <div className="container">
      <div className="card">
        <h1>Registration Form</h1>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <p className="error">{errors.name}</p>

          <input
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <p className="error">{errors.email}</p>

          <input
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <p className="error">{errors.password}</p>

          <button type="submit">Register</button>
        </form>

        <p className="success">{success}</p>

        <div className="users">
          <h2>Registered Users</h2>
          <ul>
            {users.map((u) => (
              <li key={u.id}>
                {u.name} - {u.email}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;

