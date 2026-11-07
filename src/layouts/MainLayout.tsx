import { Outlet } from "react-router-dom"
import { Header } from "../components/header/Header"

export function MainLayout(){
    return(
        <>
            <Header/>
            
            <div className="main-content">
                <Outlet/>
            </div>
            
        </>
    )
}