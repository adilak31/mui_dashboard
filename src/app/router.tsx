import { useRoutes } from "react-router"
import { commentsRoutes } from "../features/Comments"
import { postsRoutes } from "../features/Posts"
import { todosRoutes } from "../features/Todos"

export const Router = () => {
    const routes = useRoutes([
        commentsRoutes, postsRoutes, todosRoutes])
    return routes
} 