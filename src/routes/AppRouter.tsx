import { createBrowserRouter } from "react-router-dom"
import { Login } from "../pages/login/Login.tsx"
import { Register } from "../pages/register/Register.tsx"

// Routes of project
export const routes = createBrowserRouter([
    {
        path: "/auth/login/",
        element: <Login/>
    },
    {
        path: "/auth/register/",
        element: <Register/>
    }
])