import React, { useState } from 'react';
import './Postform.css';
const Postform = () => {
    const [message, setMessage] = useState('');

    // Removed duplicate handlePost function

    const [posts, setPosts] = useState([]);

    const handlePost = (e) => {
        e.preventDefault();
        const title = e.target.title.value;
        const description = e.target.Description.value;
        const content = e.target.content.value;

        if (title && description && content) {
            const newPost = { title, description, content };
            setPosts([...posts, newPost]);
            setMessage('Your post has been submitted!');
            e.target.reset();
        } else {
            setMessage('Please fill out all fields.');
        }
    };

    return (
        <div>
            <h1 id="Post">Safe space</h1>
            <p>A space where you can post anything with no fear</p>
            <h2 className="Form">Post Form</h2>
            <form onSubmit={handlePost}>
                <label htmlFor="title">Title:</label><br />
                <input type="text" id="title" /><br />
                <label htmlFor="description">Description:</label><br />
                <textarea name="Description" rows="3" cols="45"></textarea><br />
                <label htmlFor="content">Content:</label><br />
                <textarea id="content" name="content" rows="4" cols="50"></textarea><br />
                <button type="submit">Post</button>
            </form>
            {message && <p>{message}</p>}
        </div>
    );
};

export default Postform