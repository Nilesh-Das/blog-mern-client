import { useState, useEffect } from "react";
import { useLocation } from "react-router";
import axios from "axios";
import Header from "../../components/header/Header";
import Posts from "../../components/posts/Posts";
import Sidebar from "../../components/sidebar/Sidebar";
import "./Home.css";

export default function Home() {
  const [posts, setPosts] = useState([]);
  const {search} = useLocation();
  const API_URL = "https://seaborg-blog.herokuapp.com/api";

  useEffect(() => {
    const fetchPosts = async ()=> {
      const res = await axios.get(`${API_URL}/posts${search}`);
      setPosts(res.data);
    }
    fetchPosts();
  }, [search]);

  return (
    <>
      <Header />
      <div className="home">
        <Posts posts={posts} />
        <Sidebar />
      </div>
    </>
  );
}
