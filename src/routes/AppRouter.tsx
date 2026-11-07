import { createBrowserRouter } from "react-router-dom"
import { Login } from "../pages/login/Login.tsx"
import { Register } from "../pages/register/Register.tsx"
import { NotFoundHandler } from "../pages/handlers/Handlers.tsx"
import { MainLayout } from "../layouts/MainLayout.tsx"
import { Tasks } from "../pages/tasks/Tasks.tsx"

// Routes of project
export const routes = createBrowserRouter([
    {
        element: <MainLayout/>,
        children: [
            {
                path: "/tasks/",
                element: <Tasks/>
            }
        ]
    },
    {
        path: "/auth/login/",
        element: <Login/>
    },
    {
        path: "/auth/register/",
        element: <Register/>
    },

    // Not found route
    {
        path: "*",
        element: <NotFoundHandler/>
    }
])