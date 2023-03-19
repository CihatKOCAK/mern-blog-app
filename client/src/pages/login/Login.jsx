import { Link } from "react-router-dom";
import "./login.css";

function Login() {
  return (
    <div className="login">
      <span className="loginTitle">Login</span>
      <form className="loginForm">
        <label>Email</label>
        <input
          className="loginInput"
          type="text"
          placeholder="Enter your email..."
        />
        <label>Password</label>
        <input
          className="loginInput"
          type="password"
          placeholder="Enter your password..."
        />
        <div className="loginOuter">
          <button className="loginButton">
            <div className="loginButtonText">Login</div>
          </button>
        </div>
      </form>
      <button className="loginRegisterButton">
        <Link className="link" to="/register">
          {" "}
          Register{" "}
        </Link>
      </button>
    </div>
  );
}

export default Login;
