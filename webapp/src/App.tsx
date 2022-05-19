import React, { useEffect, useState } from "react";
import "./App.css";
import Posts from "./component/Posts";
import { feedAPI, feedAPISecond } from "./service/api";

function App() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    async function fetchPosts() {
      const data = await feedAPI(
        "https://api.xcess.cloud/users/feed?limit=9&page=3"
      );
      //    feedAPISecond("https://api.xcess.cloud/users/feed?limit=9&page=3");
      setPosts(data);
    }
    fetchPosts();
  }, []);
  return (
    <div>
      <Posts posts={posts} />
    </div>
  );
}

export default App;
