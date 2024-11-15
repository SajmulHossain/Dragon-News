import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';
import userImg from '../assets/user.png'
import { useContext } from 'react';
import { AuthContext } from '../contextProvider/AuthProvider';

const Nav = () => {
  const navigate = useNavigate();
  const { user, logOut } = useContext(AuthContext);

  return (
    <nav className="flex justify-between items-center">
      <div>
        <h3 className='font-semibold'>{user?.displayName && user.displayName}</h3>
      </div>
      <div>
        <ul className="flex gap-4">
          <li>
            <NavLink className="px-4 py-2" to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink className="px-4 py-2" to="/about">
              About
            </NavLink>
          </li>
          <li>
            <NavLink className="px-4 py-2" to="/career">
              Career
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="flex items-center gap-2">
        <img src={user?.photoURL ? user.photoURL : userImg} className="h-8 w-8 rounded-full" alt="user" />
        {user ? (
          <button
            onClick={() => {logOut(); navigate('/auth/login')}}
            className="btn btn-neutral min-h-0 h-8 rounded-none"
          >
            Logout
          </button>
        ) : (
          <Link
            to="/auth/login"
            className="btn btn-neutral min-h-0 h-8 rounded-none"
          >
            Login
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Nav;