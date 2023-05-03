import { createBrowserRouter } from "react-router-dom";
import App from "../App";


import PrivateRoute from "../components/PrivateRoute/PrivateRoute";
import PageNotFound from "../components/404Page/PageNotFound";
import Home from "../pages/Home/Home";
import Register from "../pages/Register/Register";
import Login from "../pages/Login/Login";
import ChefDetails from "../pages/Chef/ChefDetails";
import Blog from "../pages/Blog/Blog";



const router = createBrowserRouter([
    {
        path : "/",
        element:<App/>,
        errorElement:<PageNotFound/>,
        children:[
            {
                path:'/',
                element : <Home/>
            },
            {
                path:'blog',
                element : <Blog/>
            },
            {
                path:"register",
                element:<Register/>
            },
            {
                path:"login",
                element:<Login/>
            },
            {
                path:"/chefdetails/:id",
                element:<PrivateRoute><ChefDetails/></PrivateRoute>,
                loader: ({params}) => fetch(`https://recipe-app-sayemhaque.vercel.app/chef/${params.id}`)
            }
        ]
    }
    ,
    {
        path:"*",
        element:<PageNotFound/>
    }
])


export default router;