import { Outlet } from "react-router-dom"
import { Header } from "../components/header/Header"
import { Footer } from "../components/footer/Footer"
import { Sidebar } from "../components/sidebar/Sidebar"
import { useState } from "react"

export function MainLayout(){
    const [sideBarIsVisible, setSideBarIsVisible] = useState(true)
    
    const setVisibilitySideBar = ()=>{
        setSideBarIsVisible(!sideBarIsVisible)
    }

    return(
        <div className="app-layout">
            {sideBarIsVisible && <Sidebar/>}

            <div className="app-container">
                <Header setVisibilitySideBar={setVisibilitySideBar} isVisible={sideBarIsVisible}/>
                <main className="main-content">
                    <Outlet/>
                </main>
                <Footer/>
            </div>
        </div>
    )
}