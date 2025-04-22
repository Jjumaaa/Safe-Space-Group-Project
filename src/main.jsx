import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import routes from './routes.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home.jsx'
import ErrorPage from './components/ErrorPage.jsx'
import Viewblogs from './pages/Viewblogs.jsx'
import Createpost from './pages/Createpost.jsx'
import Editpost from './pages/Editpost.jsx'
import Viewthecommunity from './pages/Viewthecommunity.jsx'
import Ourteam from './pages/Ourteam.jsx'
import Contactus from './pages/Contactus.jsx'



const router = createBrowserRouter(routes)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//     <RouterProvider router={router}/>
//     // <Home />

// )
