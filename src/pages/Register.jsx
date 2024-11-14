import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../contextProvider/AuthProvider";

const Register = () => {
  const navigate = useNavigate();
  const { createUser, setUser } = useContext(AuthContext);
  const handleForm = (e) => {
    e.preventDefault();

    const data = new FormData(e.target);
    const name = data.get("name");
    const email = data.get("email");
    const password = data.get("password");
    const photo = data.get("photo");


    createUser(email,password)
    .then(res => {
      setUser(res.user);
      e.target.reset();
      navigate('/');
    })
    .catch(error => {
      console.log(error.message, error.code);
    })
    
  };
  return (
    <div className="flex justify-center items-center py-12">
      <div className="card bg-base-100 w-full max-w-lg shrink-0 p-12">
        <h3 className="text-center font-bold text-2xl">
          Register your account
        </h3>
        <div className="divider"></div>
        <form onSubmit={handleForm} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold">Your Name</span>
            </label>
            <input
              name="name"
              type="text"
              placeholder="Enter your name"
              className="input rounded-none bg-gray-100"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold">Photo URL</span>
            </label>
            <input
              type="text"
              name="photo"
              placeholder="Enter your photo url"
              className="input rounded-none bg-gray-100"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold">Email</span>
            </label>
            <input
              type="email"
              name="email"
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
              name="password"
              placeholder="Enter Your Password"
              className="input rounded-none bg-gray-100"
              required
            />
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-neutral rounded">Register</button>
          </div>
        </form>

        <p className="text-center text-gray-500">
          Already have an account?{" "}
          <Link to="/auth/login" className="font-semibold text-red-500">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
