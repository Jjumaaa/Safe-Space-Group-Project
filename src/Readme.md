# SafeSpace Blog Platform - Project Documentation

## 📝 Overview
SafeSpace is a full-stack blog application that allows users to create, view, and manage blog posts in a welcoming environment. This project combines React for the frontend with a Node.js/Express backend (or mock API) to deliver a complete CRUD blogging experience.

## 🚀 Features
- **User Authentication**: Login/logout functionality not yet perfect
- **Blog Management**: Get and Post
- **Responsive Design**: Works on all device sizes
- **Modern UI**: Clean, accessible interface with loading states
- **Error Handling**: Graceful error states and notifications

## 🏗️ Project Structure
```
safe-space-blog/
├── client/                  # React frontend
│   ├── public/             # Static assets
│   └── src/
│       ├── assets/         # Images, fonts
│       ├── components/     # Reusable UI components
│       ├── pages/          # Route-level components
│       ├── App.css         # Global styles
│       ├── App.jsx         # Main app component
│       ├── main.jsx        # Entry point
│       └── routes.jsx      # Routing configuration
├── .gitignore
└── README.md
```

## 🔧 Installation
1. **Fork the repository**:
   ```bash
   Form at https://github.com/Jjumaaa/Safe-Space-Group-Project
   Clone to your local machine
   ```

2. **Install dependencies**:
   ```bash
   cd client && npm install
   cd ../server && npm install
   ```

## 🖥️ Running the Application
1. **Start the backend**:
   ```bash
   cd server && npm start
   ```

2. **Start the frontend**:
   ```bash
   cd client && npm run dev
   ```

3. **Access the app**:
   Open `https://safe-space-group-project.vercel.app/` in your browser

## 🔄 Data Flow
1. **User Interaction**:
   - Submits form in `Postform.jsx`
   - Triggers `handleSubmit` function

2. **API Request**:
   ```js
   await fetch('/api/posts', {
     method: 'POST',
     headers: { 'Content-Type': 'application/json' },
     body: JSON.stringify(postData)
   });
   ```

3. **State Update**:
   - Successful response updates `posts` state
   - UI re-renders with new post

4. **Persistence**:
   - Posts stored in MongoDB (backend)
   - Client-side caching with React state

## 🛠️ Key Components

### `Postform.jsx`
- Handles post creation/editing
- Form validation
- Loading states during submission

### `Postlist.jsx`
- Displays paginated list of posts
- Responsive grid layout
- "Read More" links to individual posts


## 🌐 API Endpoints
| Endpoint | Method | Description |
|----------|--------|-------------|
| `/api/posts` | GET | Get all posts |
| `/api/posts` | POST | Create new post |


## � Error Handling
- Form validation errors
- API error boundaries
- 404 Not Found page
- Network error detection

## 🎨 Styling System
- CSS modules for component-scoped styles
- Global styles in `App.css`
- Responsive breakpoints:
  ```css
  @media (max-width: 768px)


## 📱 Responsive Design
- Flexbox and Grid layout
- Mobile-first approach
- Adaptive component sizing
- Accessible color scheme

2. **API Tests**:
   ```bash
   npm test api.test.js
   ```

## 🚨 Common Issues & Solutions
**Problem**: Posts not updating after creation  
**Fix**: Ensure state is being properly updated in `Createpost.jsx`

**Problem**: Form submissions failing  
**Fix**: Check network tab for API errors and verify CORS settings


## 📈 Future Improvements
- [ ] Add user profiles
- [ ] Implement post categories
- [ ] Add rich text editor
- [ ] Enable image uploads
- [ ] Dark mode toggle

