import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NewsCard from './NewsCard';

const NewsLayout = () => {
  const {data:news} = useLoaderData();
  return (
    <>
     <h3 className='font-semibold mb-5'>Layout</h3>

     <div className='space-y-12'>
      {
        news.map(singleNews => <NewsCard key={singleNews._id} news={singleNews}></NewsCard>)
      }
     </div>
    </>
  );
};

export default NewsLayout;