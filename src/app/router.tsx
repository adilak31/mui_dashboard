import { useRoutes } from "react-router"
import { commentsRoutes } from "../features/Comments"

export const Router = () => {
    const routes = useRoutes([
        commentsRoutes])
    return routes
} 