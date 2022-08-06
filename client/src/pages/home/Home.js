import Header from "../../components/header/Header";
import Posts from "../../components/posts/Posts";
import Sidebar from "../../components/sidebar/Sidebar";
import { useState, useEffect } from "react";
import axios from "axios";
import "./home.css";
const { useLocation } = require("react-router-dom");

const Home = () => {
  const [posts, setPosts] = useState([]);

  const [error, setError] = useState(null);
  const { search } = useLocation();
  // const url = "http://localhost:5000/posts"; // used a proxy server to avoid CORS error

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios.get("posts" + search);
        setPosts(result.data);
      } catch (error) {
        setError(error.message);
      }
    };
    fetchData();
  }, [search]);
  if (!posts.length) {
    return (
      <>
        <Header />
        <div className="home">
          <p className="noposts">No posts yet</p>
          <Sidebar />
        </div>
      </>
    );
  }
  if (error) {
    <>
      <Header />
      <div className="home">
        <p className="noposts">Something went wrong</p>
        <Sidebar />
      </div>
    </>;
  }

  return (
    <>
      <Header />
      <div className="home">
        <Posts posts={posts} />
        <Sidebar />
      </div>
    </>
  );
};

export default Home;
