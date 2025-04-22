import React from 'react'
import Createpost from './pages/Createpost'
import App from './App'
import Home from './pages/Home'
import ErrorPage from './pages/ErrorPage'
import Postpage from './pages/Postpage'
import Aboutus from './pages/Aboutus'
import LoginPage from './pages/LoginPage'



const routes = [
    {
        path:"/",
        element:<App />,
        errorElement:<ErrorPage />
    },
    {
        path:"/",
        element:<Home/>,
        errorElement:<ErrorPage />,
    },   
            {    
                path:"/postpage",
                element:<Postpage/>,
                errorElement:<ErrorPage />,
            },
          {  path:"/login",
        element:<LoginPage/>,
        errorElement:<ErrorPage />,
    },   

        
    
    {
        path:"/createpost",
        element:<Createpost/>,
        errorElement:<ErrorPage/>
    },
    {
        path:"/aboutus",
        element:<Aboutus/>,
        errorElement:<ErrorPage/>
    }

    
]
export default routes












