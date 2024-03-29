import { Link } from "react-router-dom";
import "./notFound.css";

function NotFound() {
  return (
    <div className="flex-container">
      <div className="text-center">
        <h1>
          <span className="fade-in" id="digit1">
            4
          </span>
          <span className="fade-in" id="digit2">
            0
          </span>
          <span className="fade-in" id="digit3">
            4
          </span>
        </h1>
        <h3 className="fadeIn">PAGE NOT FOUND</h3>
        <button className="btnBackToHome" type="button" name="button">
          <Link to="/">Back to Home</Link>
        </button>
      </div>
    </div>
  );
}

export default NotFound;
