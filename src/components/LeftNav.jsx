import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";


const LeftNav = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("https://openapi.programming-hero.com/api/news/categories")
    .then(res => res.json())
    .then(data => setCategories(data.data.news_category))
  }, [])
  return (
    <>
      <h3 className="font-semibold">All Category</h3>

      <nav className="mt-5">
        <ul className="space-y-2">
          {categories.map((category) => (
            <li key={category.category_id}>
              <NavLink
                to={`category/${category.category_id}`}
                className="btn w-full bg-transparent"
              >
                {category.category_name}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default LeftNav;