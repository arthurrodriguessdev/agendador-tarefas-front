import { Outlet } from "react-router-dom"
import { Header } from "../components/header/Header"
import { Footer } from "../components/footer/Footer"
import { Sidebar } from "../components/sidebar/Sidebar"
import { useState } from "react"

export function MainLayout(){
    const [sideBarIsVisible, setSideBarIsVisible] = useState(true)
    const [isDarkModeTheme, setDarkModeTheme] = useState(false)
    
    // Toggle the sidebar visibility
    const setVisibilitySideBar = ()=>{
        setSideBarIsVisible(!sideBarIsVisible)
    }
    
    // Toggle the mode theme
    const setModeTheme = ()=>{
        let newModeTheme = !isDarkModeTheme

        setDarkModeTheme(newModeTheme)
        document.documentElement.setAttribute(
            "data-theme", 
            newModeTheme ? "dark" : ""
        )
    }

    return(
        <div className="app-layout">
            {sideBarIsVisible && <Sidebar/>}

            <div className="app-container">
                <Header 
                    setVisibilitySideBar={setVisibilitySideBar} 
                    setModeTheme={setModeTheme} 
                    isVisible={sideBarIsVisible} 
                    isDarkModeTheme={isDarkModeTheme}
                />
                <main className="main-content">
                    <Outlet/>
                </main>
                <Footer/>
            </div>
        </div>
    )
}