// pages/Createpost.jsx
import React, { useState } from 'react';
import Postform from '../components/Postform';
import { useNavigate } from 'react-router-dom';

const Createpost = () => {
  const navigate = useNavigate();
  const [posts, setPosts] = useState([]); // Local state to store posts

  const handleSubmit = async (postData) => {
    try {
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 500));
      
      // Generate a mock ID and add timestamp
      const newPost = {
        ...postData,
        id: Date.now(),
        createdAt: new Date().toISOString(),
        image: "https://images.unsplash.com/photo-1709310960396-0e80bf7a9bde?w=600&auto=format" // Default image
      };

      // Update local state (replace with real API later)
      setPosts(prevPosts => [...prevPosts, newPost]);
      console.log("New post created (mock):", newPost);

      // Redirect to the posts page
      navigate('/postpage');
    } catch (error) {
      console.error("Error creating post:", error);
    }
  };

  return (
    <div className="create-post-page">
      <Postform onSubmit={handleSubmit} />
    </div>
  );
};

export default Createpost;