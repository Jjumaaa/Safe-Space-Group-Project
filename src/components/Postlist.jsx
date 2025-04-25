import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getPosts } from '../services/api';
import Loading from './Loading';
import './PostList.css';

const PostList = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const data = await getPosts();
        setPosts(data.slice(0, 10)); // Limit to 10 posts for demo
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  if (loading) return <Loading />;
  if (error) return <div className="error-message">Error: {error}</div>;

  return (
    <div className="post-list">
      {posts.map((post) => (
        <div key={post.id} className="post-card">
          <h3>
            <Link to={`/post/${post.id}`}>{post.title}</Link>
          </h3>
          <p>{post.body.substring(0, 100)}...</p>
          <div className="post-actions">
            <Link to={`/edit/${post.id}`} className="btn">
              Edit
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PostList;