import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../contextProvider/AuthProvider';
import Loader from '../components/Loader';

const Login = () => {
  const {logIn, setUser} = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const handleForm = e => {
    e.preventDefault();

    const form = e.target;

    const email = form.email.value;
    const password = form.password.value;

    logIn(email,password)
    .then(res => {
      setUser(res.user);
      e.target.reset();
      navigate(location?.state ? location.state : '/');
    })
    .catch(error => {
      console.log(error.message, error.code);
    })

  }
  return (
    <div className="flex justify-center items-center py-12">
      <div className="card bg-base-100 w-full max-w-lg shrink-0 p-12">
        <h3 className='text-center font-bold text-2xl'>Login your account</h3>
        <div className="divider"></div>
        <form onSubmit={handleForm} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold">Email</span>
            </label>
            <input
              type="email"
              name='email'
              placeholder="Enter your email address"
              className="input rounded-none bg-gray-100"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold">Password</span>
            </label>
            <input
              type="password"
              name='password'
              placeholder="Enter Your Password"
              className="input rounded-none bg-gray-100"
              required
            />
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-neutral rounded">Login</button>
          </div>
        </form>

        <p className='text-center text-gray-500'>Don't have an account? <Link to='/auth/register' className='font-semibold text-red-500'>Register</Link></p>
      </div>
    </div>
  );
};

export default Login;