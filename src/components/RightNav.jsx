import React, { useContext } from 'react';
import { FaFacebook, FaGithub, FaGoogle, FaInstagram, FaTwitter } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../contextProvider/AuthProvider';

const RightNav = () => {
  const {loginWithGoogle, loginWithGithub, setUser, user} = useContext(AuthContext);

  const handleGoogleLogin = () => {
    loginWithGoogle()
    .then(res => {
      setUser(res.user);
    })
    .catch(error => {
      console.log(error.message);
    })
  }

  const hanldeGithubLogin = () => {
    loginWithGithub()
    .then(res => {
      setUser(res.user);
    })
    .catch(error => {
      console.log(error.message);
    })
  }
  return (
    <section>
      {!user && (
        <>
          <h3 className="font-semibold mb-5">Login With</h3>
          <div className="flex flex-col gap-4 mb-8">
            <button
              onClick={handleGoogleLogin}
              className="btn btn-outline flex gap-2 items-center font-semibold text-blue-500"
            >
              <FaGoogle />
              Login with Google
            </button>
            <button
              onClick={hanldeGithubLogin}
              className="btn btn-outline flex gap-2 items-center font-semibold"
            >
              <FaGithub />
              Login with Github
            </button>
          </div>
        </>
      )}

      <div>
        <h3 className="font-semibold mb-5">Find Us On</h3>

        <div className="join w-full join-vertical">
          <Link className="btn join-item justify-start bg-transparent">
            <FaFacebook color="blue" size={24} /> Facebook
          </Link>
          <Link className="btn join-item justify-start bg-transparent">
            <FaTwitter color="blue" size={24} /> Twitter
          </Link>
          <Link className="btn join-item justify-start bg-transparent">
            <FaInstagram color="red" size={24} /> Instagram
          </Link>
        </div>
      </div>
    </section>
  );
};

export default RightNav;