import React, { useContext } from 'react';
import { AuthContext } from '../contextProvider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import Loader from '../components/Loader';


const PrivetRoute = ({children}) => {
  const location = useLocation();
  const {user, loading} = useContext(AuthContext);

  if(loading) {
    return <Loader />;
  }

  if(user && user?.email) {
    return children;
  }
  return (
    <Navigate state={location.pathname} replace={true} to='/auth/login' />
  );
};

export default PrivetRoute;