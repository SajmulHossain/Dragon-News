import React, { useContext } from 'react';
import Header from '../mainComponents/Header';
import LeftNav from '../components/LeftNav';
import RightNav from '../components/RightNav';
import { Outlet } from 'react-router-dom';
import { AuthContext } from '../contextProvider/AuthProvider';
import Loader from '../components/Loader';

const Home = () => {

  const {loading} = useContext(AuthContext);

  if(loading) {
    return <Loader />;
  }
  return (
    <>
      <Header />
      <main className='w-11/12 mx-auto md:grid grid-cols-12 gap-3 py-8'>
        <aside className='col-span-3'>
          <LeftNav />
        </aside>
        <section className='col-span-6'>
          <Outlet />
        </section>
        <aside className='col-span-3'>
          <RightNav />
        </aside>
      </main>
    </>
  );
};

export default Home;