import {
    createBrowserRouter,
} from "react-router";
import Home from "../Pages/Home/Home";
import Root from "../Layouts/Root";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Login from "../Pages/Login/Login";
import Registration from "../Pages/Registration/Registration";
import AllGroups from "../Pages/AllGroups/AllGroups";
import CreateGroups from "../Pages/CreateGroups/CreateGroups";
import MyGroups from "../Pages/MyGroups/MyGroups";
import PrivateRoutes from "./PrivateRoute";

export const router = createBrowserRouter([
    {
        path: "/",
        Component: Root,
        errorElement: <ErrorPage />,
        children: [
            {
                index: true,
                Component: Home,
            },
            {
                path: "/login",
                Component: Login,
            },
            {
                path: "/register",
                Component: Registration,
            },
            {
                path: "/groups",
                Component: AllGroups,
            },
            {
                path: "create-group",
                // Component: CreateGroups,
                element: <PrivateRoutes><CreateGroups></CreateGroups></PrivateRoutes>
            },
            {
                path: "my-groups",
                // Component: MyGroups,
                element: <PrivateRoutes><MyGroups></MyGroups></PrivateRoutes>
            }
        ]
    },
]);