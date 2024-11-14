import moment from 'moment';
import logo from '../assets/logo.png'
import Marquee from 'react-fast-marquee';
import Nav from './Nav';

const Header = () => {
  return (
    <header className="py-5 w-11/12 mx-auto">
      <div className="flex justify-center">
        <img className="max-w-72" src={logo} alt="logo" />
      </div>

      <div className="mt-5 flex items-center flex-col">
        <p className="text-gray-400">Journalism Without Fear or Favour</p>
        <p>{moment().format("MMMM DD, YYYY")}</p>
      </div>

      <div className="flex items-center gap-2 bg-gray-300 p-1">
        <p className="bg-red-500 px-4 py-1">Latest</p>
        <Marquee>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem nam
            assumenda omnis labore tenetur aspernatur odit, voluptate non itaque
            delectus?
          </p>
        </Marquee>
      </div>

      <div className='mt-5'>
        <Nav />
      </div>
    </header>
  );
};

export default Header;