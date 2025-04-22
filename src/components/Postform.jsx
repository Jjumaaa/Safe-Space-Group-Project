import React, { useState } from 'react';

const Postform = () => {
    const [message, setMessage] = useState('');

    const handlePost = (e) => {
        e.preventDefault();
        setMessage('Your post has been submitted!');
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
                <textarea name="Description" rows="3" cols="45">Description</textarea><br />
                <label htmlFor="content">Content:</label><br />
                <textarea id="content" name="content" rows="4" cols="50"></textarea><br />
                <button type="submit">Post</button>
            </form>
            {message && <p>{message}</p>}
        </div>
    );
};

export default Postform