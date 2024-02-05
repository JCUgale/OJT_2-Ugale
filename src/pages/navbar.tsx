import { Link } from 'react-router-dom';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';  // Import Bootstrap CSS

export default function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <div className="collapse navbar-collapse" id="myNavbar">
          <ul className="nav navbar-nav">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/hobbies">About</Link>
            </li>
            <li>
              <Link to="/calculator">Calculator</Link>
            </li>
            <li>
              <Link to="/json">JSON</Link>
            </li>
          </ul>
          <ul className="nav navbar-nav navbar-right">
            {/* Add any additional items you need on the right side */}
          </ul>
        </div>
      </div>
    </nav>
  );
}