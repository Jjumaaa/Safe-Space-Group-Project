import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Postform from '../components/Postform';

const Createpost = () => {
  const [posts, setPosts] = useState([]);

  const handleCreatePost = async (postData) => {
    const newPost = {
      ...postData,
      id: Date.now(),
      createdAt: new Date().toISOString()
    };
    

    setPosts(prev => [...prev, newPost]);
    
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