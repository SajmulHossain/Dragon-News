import { Link, useLoaderData } from "react-router-dom";
import Header from "../mainComponents/Header";
import RightNav from "./RightNav";
import { FaArrowLeft } from "react-icons/fa";
import Loader from "./Loader";


const NewsDetails = () => {
  const {data} = useLoaderData();
  const [news] = data;

  return (
    <section className="w-8/12 mx-auto">
      <Header />
      <main className="grid grid-cols-12 gap-4">
        <section className="col-span-9">
          <h3 className="font-semibold mb-3">Dragon News</h3>

          <div className="border rounded-md p-4">
            <div>
              <img className="w-full h-[400px] object-cover rounded-lg" src={news.thumbnail_url} alt={`Image of ${news.title}`} />
            </div>

            <div>
              <h2 className="font-bold text-2xl mt-5">{news.title}</h2>
              <p className="text-gray-500 mt-4">{news.details}</p>

              <Link to={`/category/${news?.category_id}`} className="flex gap-2 items-center mt-4 bg-red-600 text-white w-fit btn hover:text-black">
                <FaArrowLeft />
                All news in this categories
              </Link>
            </div>
          </div>
        </section>
        <aside className="col-span-3">
          <RightNav />
        </aside>
      </main>
    </section>
  );
};

export default NewsDetails;