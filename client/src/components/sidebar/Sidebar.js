import { useState, useEffect } from "react";
import "./sidebar.css";
import axios from "axios";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios.get("/categories");
        setCategories(result.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME</span>
        <img
          src="https://images.pexels.com/photos/9606795/pexels-photo-9606795.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
        />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
          facere harum odio explicabo hic fuga, error labore dignissimos.
        </p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
          {categories.map((category) => {
            return (
              <Link
                to={`/?category=${category.name}`}
                className="link"
                key={category._id}
              >
                <li className="sidebarListItem">{category.name}</li>
              </Link>
            );
          })}
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW US</span>
        <div className="sidebarSocial">
          <i className="sidebarIcon fa-brands fa-square-facebook"></i>
          <i className="sidebarIcon fa-brands fa-square-twitter"></i>
          <i className="sidebarIcon fa-brands fa-square-instagram"></i>
          <i className="sidebarIcon fa-brands fa-square-github"></i>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
