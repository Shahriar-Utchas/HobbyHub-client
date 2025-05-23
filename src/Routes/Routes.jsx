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
import GroupDetails from "../Pages/GroupDetails/GroupDetails";
import UpdateGroup from "../Pages/UpdateGroup/UpdateGroup";
import JoinedGroups from "../Pages/JoinedGroups/JoinedGroups";

export const router = createBrowserRouter([
    {
        path: "/",
        Component: Root,
        errorElement: <ErrorPage />,
        children: [
            {
                index: true,
                loader: () => fetch("http://localhost:3000/groups"),
                hydrateFallbackElement: <div className="flex justify-center items-center h-screen">
                    <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-blue-500"></div>
                </div>,
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
                loader: () => fetch("http://localhost:3000/groups"),
                hydrateFallbackElement: <div className="flex justify-center items-center h-screen">
                    <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-blue-500"></div>
                </div>,
                Component: AllGroups,
            },
            {
                path: "create-group",
                element: <PrivateRoutes><CreateGroups></CreateGroups></PrivateRoutes>
            },
            {
                path: "my-groups",
                element: <PrivateRoutes><MyGroups></MyGroups></PrivateRoutes>
            },
            {
                path: "groupDetails/:id",
                loader: ({ params }) => fetch(`http://localhost:3000/group/${params.id}`),
                hydrateFallbackElement: <div className="flex justify-center items-center h-screen">
                    <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-blue-500"></div>
                </div>,
                element: <PrivateRoutes><GroupDetails></GroupDetails></PrivateRoutes>
            },
            {
                path: "updateGroup/:id",
                element: <PrivateRoutes><UpdateGroup></UpdateGroup></PrivateRoutes>
            },
            {
                path: "/joinedGroups",
                element: <PrivateRoutes><JoinedGroups></JoinedGroups></PrivateRoutes>
            }
        ]
    },
]);