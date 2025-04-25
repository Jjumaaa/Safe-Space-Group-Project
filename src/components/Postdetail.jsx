import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getPost } from '../services/api';
import Loading from './Loading';
import './PostDetail.css';

const PostDetail = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const data = await getPost(id);
        setPost(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [id]);

  if (loading) return <Loading />;
  if (error) return <div className="error-message">Error: {error}</div>;
  if (!post) return <div>Post not found</div>;

  return (
    <div className="post-detail">
      <h2>{post.title}</h2>
      <p className="post-body">{post.body}</p>
      <div className="post-actions">
        <Link to={`/edit/${post.id}`} className="btn">
          Edit Post
        </Link>
        <Link to="/" className="btn">
          Back to Posts
        </Link>
      </div>
    </div>
  );
};

export default PostDetail;