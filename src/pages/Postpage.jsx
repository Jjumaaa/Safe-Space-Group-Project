import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import './Postpage.css';
import { Link } from 'react-router-dom';

const Postpage = () => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    
    const fetchPosts = async () => {
      try {
        
        const mockPosts = [
          {
            id: 1,
            title: "Personal Growth: 5 Morning Habits That Changed My Life",
            content: "How waking up 30 minutes earlier, journaling, and avoiding phones transformed my productivity and mental health.",
            image: "https://images.unsplash.com/photo-1498837167922-ddd27525d352?w=600&auto=format",
            category: "Personal Growth",
            author: "Jane Doe",
            createdAt: "2023-05-15"
          },
          {
            id: 2,
            title: "Travel: Hidden Gems in Bali: Beyond the Tourist Spots",
            content: "Discover secret waterfalls, local warungs (eateries), and untouched beaches most tourists never see.",
            image: "https://images.unsplash.com/photo-1704253411612-e4deb715dcd8?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            category: "Travel",
            author: "John Smith",
            createdAt: "2023-06-20"
          },
          {
            id: 3,
            title: "Mental Health: The Power of Mindfulness in Everyday Life",
            content: "How practicing mindfulness for just 10 minutes a day can reduce stress and improve focus.",
            image: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?w=600&auto=format",
            category: "Mental Health"
          },
          {
            id: 4,
            title: "Tech Trends: The Rise of AI in Everyday Applications",
            content: "Exploring how AI is transforming industries from healthcare to finance and what it means for the future.",
            image: "https://images.unsplash.com/photo-1593642632850-e4af2a3b8c6d?w=600&auto=format",
            category: "Technology"
          },

        ];
        
        setPosts(mockPosts);
      } catch (error) {
        console.error("Error fetching posts:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchPosts();
  }, []);

  if (isLoading) {
    return (
      <div className="post-page">
        <header><Navbar /></header>
        <main className="post-container">
          <h1 className="page-title">Loading Posts...</h1>
        </main>
      </div>
    );
  }

  return (
    <div className="post-page">
      <header><Navbar /></header>
      
      <main className="post-container">
        <h1 className="page-title">Latest Blog Posts</h1>

        {posts.length === 0 ? (
          <div className="no-posts">
            <p>No posts yet. Be the first to create one!</p>
            <Link to="/createpost" className="create-link">
              Create Your First Post
            </Link>
          </div>
        ) : (
          posts.map(post => (
            <article key={post.id} className="blog-post">
              <h2 className="post-title">{post.title}</h2>
              <div className="image-container">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="post-image"
                  loading="lazy"
                />
              </div>
              <p className="post-excerpt">{post.content}</p>
              <div className="post-meta">
                <span className="post-category">{post.category}</span>
                <span className="post-author">By {post.author}</span>
                <span className="post-date">{new Date(post.createdAt).toLocaleDateString()}</span>
              </div>
              <Link to={`/postdetail/${post.id}`} className="read-more">
                Read Full Article →
              </Link>
            </article>
          ))
        )}
      </main>
    </div>
  );
};

export default Postpage;