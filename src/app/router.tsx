import { useRoutes } from "react-router"
import { commentsRoutes } from "../features/Comments"
import { postsRoutes } from "../features/Posts"

export const Router = () => {
    const routes = useRoutes([
        commentsRoutes, postsRoutes])
    return routes
} 