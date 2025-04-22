import React from 'react'
import Createpost from './pages/Createpost'
import App from './App'
import Home from './pages/Home'
import ErrorPage from './pages/ErrorPage'
import Postpage from './pages/Postpage'
import Aboutus from './pages/Aboutus'



const routes = [
    {
        path:"/",
        element:<App />,
        errorElement:<ErrorPage />
    },
    {
        path:"/home",
        element:<Home/>,
        errorElement:<ErrorPage />,
    },   
            {    
                path:"postpage",
                element:<Postpage/>,
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












