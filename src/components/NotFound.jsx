import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <section className='h-screen flex flex-col justify-center items-center md:w-11/12 px-4'>
      <h1 className='font-bold text-3xl'>404 not found</h1>
      <div className='mt-3 space-x-4'>
        <Link to='/' className='btn btn-neutral'>Goto Home</Link>
      </div>
    </section>
  );
};

export default NotFound;