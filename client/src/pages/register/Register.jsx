import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./register.css";

function Register() {
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [mailErr, setMailErr] = useState({
    mailErr: false,
    mailText: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(false);
    if (!username || !email || !password) {
      setError(true);
    }

    if (email.includes("@") === false || email.includes(".") === false) {
      setMailErr({
        mailErr: true,
        mailText: "Please enter a valid email address",
      });
    }
    
    if (username && email && password && mailErr.mailErr === false) {
      const user = {
        username,
        email,
        password,
      };
      try {
        const res = await axios.post("/auth/register", user);
        res.data && window.location.replace("/login");
      } catch (err) {
        console.log(err);
      }
    }

      
  };

  return (
    <div className="register">
      <span className="registerTitle">Register</span>
      <form className="registerForm" onSubmit={handleSubmit}>
        <label>Username</label>
        <input
          className="registerInput"
          type="text"
          placeholder="Enter your username..."
          onChange={(e) => setUserName(e.target.value)}
        />
        <label>Email</label>
        <input
          className="registerInput"
          type="text"
          placeholder="Enter your email..."
          onChange={(e) => setEmail(e.target.value)}
        />
        {mailErr.mailErr && <p className="registerError">{mailErr.mailText}</p>}
        <label>Password</label>
        <input
          className="registerInput"
          type="password"
          placeholder="Enter your password..."
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="registerButton">Register</button>
      </form>
      <p className="registerError">{error && "Please fill in all fields!"}</p>
      <button className="registerLoginButton">
        <Link className="link" to="/login">
          {" "}
          Login{" "}
        </Link>
      </button>
    </div>
  );
}

export default Register;
