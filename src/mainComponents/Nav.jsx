import { NavLink } from 'react-router-dom';
import user from '../assets/user.png'

const Nav = () => {
  return (
    <nav className='flex justify-between items-center'>
      <div></div>
      <div>
        <ul className='flex gap-4'>
          <li>
            <NavLink className='px-4 py-2' to='/'>Home</NavLink>
          </li>
          <li>
            <NavLink className='px-4 py-2' to='/about'>About</NavLink>
          </li>
          <li>
            <NavLink className='px-4 py-2' to='/career'>Career</NavLink>
          </li>
        </ul>
      </div>
      <div className='flex items-center gap-2'>
        <img src={user} className='h-8 w-8' alt="user" />
        <button className="btn btn-neutral min-h-0 h-8 rounded-none">Login</button>
      </div>
    </nav>
  );
};

export default Nav;