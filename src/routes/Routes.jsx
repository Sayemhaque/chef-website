import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../Home/Home";
import ChefDetails from "../Chef/ChefDetails";
import Login from "../Login/Login";
import Register from "../Register/Register";
import PrivateRoute from "../PrivateRoute/PrivateRoute";


const router = createBrowserRouter([
    {
        path : "/",
        element:<App/>,
        children:[
            {
                path:'/',
                element : <Home/>
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
])


export default router;