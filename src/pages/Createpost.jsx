import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Postform from '../components/Postform';

const Createpost = () => {
  const [posts, setPosts] = useState([]);

  const handleCreatePost = async (postData) => {
    // In a real app, you would call your API here
    const newPost = {
      ...postData,
      id: Date.now(),
      createdAt: new Date().toISOString()
    };
    
    // For demo purposes, we'll just update state
    setPosts(prev => [...prev, newPost]);
    
    // Simulate API delay
    return new Promise(resolve => setTimeout(() => resolve(newPost), 1000));
  };

  return (
    <div className="create-post-page">
      <Navbar />
      <main>
        <Postform onSubmit={handleCreatePost} />
      </main>
    </div>
  );
};

export default Createpost;