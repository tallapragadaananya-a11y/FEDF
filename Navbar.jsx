import { Link } from "react-router-dom";
import "../styles/Navbar.css";

function Navbar() {

  const user = JSON.parse(
    localStorage.getItem("currentUser")
  );

  return (
    <nav className="navbar">

      <div className="logo">
        ShopWish ✨
      </div>

      <ul className="nav-links">

        <li>
          <Link to="/">Home</Link>
        </li>

        <li>
          <Link to="/wishlist">
            Wishlist
          </Link>
        </li>

        {!user ? (
          <>
            <li>
              <Link to="/login">
                Login
              </Link>
            </li>

            <li>
              <Link to="/register">
                Register
              </Link>
            </li>
          </>
        ) : (
          <>
            <li>
              <Link to="/profile">
                Hello, {user.username}
              </Link>
            </li>
          </>
        )}

      </ul>

    </nav>
  );
}

export default Navbar;
