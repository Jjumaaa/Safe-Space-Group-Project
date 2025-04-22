import React from 'react'
import Createpost from './pages/Createpost'
import App from './App'
import Home from './pages/Home'
import ErrorPage from './pages/ErrorPage'
import Postpage from './pages/Postpage'



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
        children:[
            {    
                path:"postpage",
                element:<Postpage/>,
                errorElement:<ErrorPage />,
            }
        ]
    },
    {
        path:"/createpost",
        element:<Createpost/>,
        errorElement:<ErrorPage/>
    }
    
]
export default routes












// const routes = [
//     {
//         path:"/",
//         element: <App />,
//         errorElement:<ErrorPage />,
//         children:[
//             {
//                 path:"/",
//                 element:<Home />,
//                 children:[
//                     {
//                         path:"/viewblogs",
//                         element:<Viewblogs/>

//                     },
//                     {
//                         path:"/createpost",
//                         element:<Createpost/>
//                     },
//                     {
//                         path:"/editpost",
//                         element:<Editpost/>
//                     }
//                 ]
                
//             },
//             {
//                 path:"/viewcommunity",
//                 element:<Viewthecommunity />
//             },
//             {
//                 path:"/ourteam",
//                 element:<Ourteam />,
//                 children:[
//                     {
//                     path:"contactUs",
//                     element:<Contactus />
//                     }


//                 ]
//             }
//              ]
//          }
// ]

// export default routes