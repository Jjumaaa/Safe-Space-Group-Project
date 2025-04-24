import React from 'react'

const Editpost = () => {
const [postContent, setPostContent] = React.useState("");

const handleInputChange = (e) => {
    setPostContent(e.target.value);
};

const handleFormSubmit = (e) => {
    e.preventDefault();
    // Logic to handle the post update (e.g., API call)
    console.log("Updated Post Content:", postContent);
};

return (
    <div>
        <h2>Edit Post</h2>
        <form onSubmit={handleFormSubmit}>
            <textarea
                value={postContent}
                onChange={handleInputChange}
                placeholder="Edit your post here..."
                rows="5"
                cols="50"
            />
            <br />
            <button type="submit">Save Changes</button>
        </form>
    </div>
);
}

export default Editpost