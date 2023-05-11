import { Outlet } from "react-router";
import { CreateTodos } from "./pages/create";
import DetailsTodos from "./pages/details";
import EditTodos from "./pages/edit";

import { TodosList } from "./pages/list";

export const todosRoutes = {
    path: 'todos',
    element: <Outlet />,
    children: [
        {
            path: '', element: <TodosList />
        },
        {
            path: 'create', element: <CreateTodos />
        },
        {
            path: 'details/:id', element: <DetailsTodos />
        },
        {
            path: 'edit/:id', element: <EditTodos />
        }


    ]
}