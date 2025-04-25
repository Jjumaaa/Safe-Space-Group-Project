import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Postform.css';

const Postform = ({ initialData, onSubmit, isEditing = false }) => {
  const [formData, setFormData] = useState(
    initialData || { title: '', content: '', author: '' }
  );
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      await onSubmit(formData);
      navigate('/postpage');
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="post-form-container">
      <h2>{isEditing ? 'Edit Post' : 'Create New Post'}</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Title</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
          />
        </div>
        
        <div className="form-group">
          <label>Content</label>
          <textarea
            name="content"
            value={formData.content}
            onChange={handleChange}
            required
          />
        </div>
        
        <div className="form-group">
          <label>Author</label>
          <input
            type="text"
            name="author"
            value={formData.author}
            onChange={handleChange}
            required
          />
        </div>
        
        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? 'Submitting...' : 'Submit'}
        </button>
      </form>
    </div>
  );
};

export default Postform;