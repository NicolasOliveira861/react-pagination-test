import React, { useEffect, useState } from "react";
import axios from "axios";

import { Container } from "./styles";

import Posts from "../../components/Posts";
import Pagination from "../../components/Pagination";

const Home: React.FC = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(10);

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
      setPosts(res.data);
      setLoading(false);
    };

    fetchPosts();
  }, []);

  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  // Chane page
  const paginate = (pageNumber: any) => setCurrentPage(pageNumber);

  return (
    <Container>
      <h1 className="text-primary"> My Blog </h1>
      <Pagination
        totalPosts={posts.length}
        postsPerPage={postsPerPage}
        paginate={paginate}
        className="pagination"
      />
      <Posts posts={currentPosts} loading={loading} />
    </Container>
  );
};

export default Home;