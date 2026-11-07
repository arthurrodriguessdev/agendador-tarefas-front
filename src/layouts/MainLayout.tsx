import { Outlet } from "react-router-dom"
import { Header } from "../components/header/Header"
import { Footer } from "../components/footer/Footer"
import { Sidebar } from "../components/sidebar/Sidebar"

export function MainLayout(){
    return(
        <div className="app-layout">
            <Sidebar/>

            <div className="app-container">
                <Header/>

                <main className="main-content">
                    <Outlet/>
                </main>

                <Footer/>
            </div>
        </div>
    )
}