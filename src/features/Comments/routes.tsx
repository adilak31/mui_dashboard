import { Outlet } from "react-router";
import Create from "./pages/create";
import Details from "./pages/details";
import Edit from "./pages/edit";
import { List } from "./pages/list";

export const commentsRoutes = {
    path: '', element: <Outlet />,
    children: [
        { path: '/', element: <List /> },
        {
            path: '/create', element: <Create />
        },
        { path: '/edit/:id', element: <Edit /> },
        { path: '/details/:id', element: <Details /> },




    ]
}