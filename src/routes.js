import App from "./App";
import ErrorPage from "./components/ErrorPage";
import Contactus from "./pages/Contactus";
import Createpost from "./pages/Createpost";
import Editpost from "./pages/Editpost";
import Ourteam from "./pages/Ourteam";
import Viewblogs from "./pages/Viewblogs";
import Viewthecommunity from "./pages/Viewthecommunity";


const routes =[
    {
        path:"/",
        element:<App/>,
        errorElement:<ErrorPage />,
        children:[
            {
                path:"/",
                element:<Home />,
                children:[
                    {
                        path:"/viewblogs",
                        element:<Viewblogs/>

                    },
                    {
                        path:"/createpost",
                        element:<Createpost/>
                    },
                    {
                        path:"/editpost",
                        element:<Editpost/>
                    }
                ]
                
            },
            {
                path:"/viewcommunity",
                element:<Viewthecommunity />
            },
            {
                path:"/ourteam",
                element:<Ourteam />,
                children:[
                    {
                    path:"/contactUs",
                    element:<Contactus />
                    }


                ]
            }
            
            
            

        ]
        
    }
]