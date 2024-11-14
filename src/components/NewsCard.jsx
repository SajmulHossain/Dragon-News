import React from 'react';
import { CiBookmark, CiStar } from 'react-icons/ci';
import { FaStar } from 'react-icons/fa';
import { IoEye, IoShareSocialOutline } from 'react-icons/io5';
import Rating from 'react-rating';
import ReactStars from "react-rating-stars-component";

const NewsCard = ({news}) => {
  console.log(news);
  return (
    <div className="border">
      <div className="flex justify-between items-center bg-gray-200 p-4">
        <div className="flex gap-2 items-center">
          <img
            className="h-12 w-12 rounded-full"
            src={news.author.img}
            alt={`${news.author.name}'s images`}
          />
          <div>
            <h3 className="font-semibold">{news.author.name}</h3>
            <p className="text-gray-500">{news.author.published_date}</p>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <CiBookmark />
          <IoShareSocialOutline />
        </div>
      </div>

      <div className="mt-5 px-4">
        <h2 className="font-bold text-2xl">{news.title}</h2>

        <div className="mt-8">
          <img src={news.image_url} alt="" />
        </div>

        <p className="mt-12 text-gray-400">{news.details}</p>

        <div className="divider my-0"></div>

        <div className="py-5 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Rating
              start={0}
              stop={5}
              step={1}
              initialRating={news.rating.number}
              readonly={true}
              emptySymbol={<CiStar size={24} />}
              fullSymbol={<FaStar size={24} color="#ffd700" />}
            />

            <p>{news.rating.number}</p>
          </div>

          <div className='flex items-center gap-2'>
            <IoEye size={24} />
            <p>{news.total_view}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;