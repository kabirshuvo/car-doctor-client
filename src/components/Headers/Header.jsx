import { useContext } from "react";
import { FaCarAlt } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleLogOut = () => {
    logOut();
  };

  const navItems = (
    <>
      <li>
        <NavLink to="/">Home </NavLink>
      </li>
      <li>
        <NavLink to="/about">About </NavLink>
      </li>
      <li>
        <NavLink to="/services">Services </NavLink>
      </li>
      <li>
        <NavLink to="/blog">Blog </NavLink>
      </li>
      <li>
        <NavLink to="/contacts">Contacts </NavLink>
      </li>
      
        {user?.email ? (
          <>
            <li>
              <NavLink to="/bookings">My Bookings </NavLink>
            </li>
            <li>
              <button onClick={handleLogOut}>LogOut</button>
            </li>
          </>
        ) : (
          <li>
            <Link  to="/login">
              LogIn
            </Link>
          </li>
        )}
      </>
    
  );

  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navItems}
            </ul>
          </div>
          <Link to="/" className="btn btn-ghost normal-case text-xl">
            Car <FaCarAlt className="mx-2 text-purple-700"></FaCarAlt> Doctor
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="flex gap-7">{navItems}</ul>
        </div>
        <div className="navbar-end">
          <Link to="/appointment" className="btn btn-denger">
            Appointment
          </Link>

          <div>{/* Login - LogOut Section */}</div>
        </div>
      </div>
    </div>
  );
};

export default Header;
