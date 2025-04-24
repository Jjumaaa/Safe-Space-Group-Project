import React from 'react';
import Navbar from '../components/Navbar';
import './Postpage.css';

const Postpage = () => {
  return (
    <div className="post-page">
      <header><Navbar /></header>
      
      <main className="post-container">
        <h1 className="page-title">Latest Blog Posts</h1>

        
        <article className="blog-post">
          <h2 className="post-title">Personal Growth: "5 Morning Habits That Changed My Life"</h2>
          <div className="image-container">
            <img 
              src="https://images.unsplash.com/photo-1498837167922-ddd27525d352?w=600&auto=format" 
              alt="Morning routine"
              className="post-image"
              loading="lazy"
            />
          </div>
          <p className="post-excerpt">
            How waking up 30 minutes earlier, journaling, and avoiding phones transformed my productivity and mental health.
          </p>
        </article>

        
        <article className="blog-post">
          <h2 className="post-title">Travel: "Hidden Gems in Bali: Beyond the Tourist Spots"</h2>
          <div className="image-container">
            <img 
              src="https://images.unsplash.com/photo-1704253411612-e4deb715dcd8?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
              alt="Bali hidden beach"
              className="post-image"
              loading="lazy"
            />
          </div>
          <p className="post-excerpt">
            Discover secret waterfalls, local warungs (eateries), and untouched beaches most tourists never see.
          </p>
        </article>

        
        <article className="blog-post">
          <h2 className="post-title">Tech Review: "iPhone 15 vs. Pixel 8: Ultimate Camera Test"</h2>
          <div className="image-container">
            <img 
              src="https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?w=600&auto=format" 
              alt="Phone cameras"
              className="post-image"
              loading="lazy"
            />
          </div>
          <p className="post-excerpt">
            Side-by-side photo comparisons, low-light performance, and which phone wins for vloggers.
          </p>
        </article>

        
        <article className="blog-post">
          <h2 className="post-title">Health: "10-Minute Yoga Flow for Desk Workers"</h2>
          <div className="image-container">
            <img 
              src="https://images.unsplash.com/photo-1545205597-3d9d02c29597?w=600&auto=format" 
              alt="Office yoga"
              className="post-image"
              loading="lazy"
            />
          </div>
          <p className="post-excerpt">
            Easy stretches to relieve back pain from sitting all day (with GIF demonstrations).
          </p>
        </article>

        
        <article className="blog-post">
          <h2 className="post-title">Food: "3-Ingredient Vegan Cookies Anyone Can Make"</h2>
          <div className="image-container">
            <img 
              src="https://images.unsplash.com/photo-1551024506-0bccd828d307?w=600&auto=format" 
              alt="Vegan cookies"
              className="post-image"
              loading="lazy"
            />
          </div>
          <p className="post-excerpt">
            Simple recipes using banana, oats, and nut butter – no baking skills required!
          </p>
        </article>

        
        <article className="blog-post">
          <h2 className="post-title">Finance: "How I Saved $10K in 6 Months (Real Numbers)"</h2>
          <div className="image-container">
            <img 
              src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&auto=format" 
              alt="Money savings"
              className="post-image"
              loading="lazy"
            />
          </div>
          <p className="post-excerpt">
            Exact budgeting strategies, apps I used, and lifestyle tweaks that added up fast.
          </p>
        </article>

       
        <article className="blog-post">
          <h2 className="post-title">DIY: "Turn Old T-Shirts Into Trendy Tote Bags"</h2>
          <div className="image-container">
            <img 
              src="https://images.unsplash.com/photo-1535350356005-fd52b3b524fb?w=600&auto=format" 
              alt="DIY tote bag"
              className="post-image"
              loading="lazy"
            />
          </div>
          <p className="post-excerpt">
            Step-by-step sewing tutorial with photos – perfect for beginners!
          </p>
        </article>
      </main>
    </div>
  );
};

export default Postpage;