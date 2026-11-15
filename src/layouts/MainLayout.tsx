import { Outlet } from "react-router-dom"
import { Header } from "../components/header/Header"
import { Footer } from "../components/footer/Footer"
import { Sidebar } from "../components/sidebar/Sidebar"
import { useEffect, useState } from "react"
import { setLocalStorage, getValueLocalStorage } from "../services/utilities.ts"

/**
 * This function receive one param that will control mode theme
 * @param active - if true, dark mode is actived
 */
function controlDarkMode(active?: boolean){
    const lightOrDark = active ? "dark" : ""
    document.documentElement.setAttribute("data-theme", lightOrDark)
}

export function MainLayout(){
    const [sideBarIsVisible, setSideBarIsVisible] = useState(true)
    const [isDarkModeTheme, setDarkModeTheme] = useState(getValueLocalStorage("themeMode") === "dark")

    useEffect(()=>{
        controlDarkMode(isDarkModeTheme)
    }, [])

    // Toggle the sidebar visibility
    const setVisibilitySideBar = ()=>{
        setSideBarIsVisible(!sideBarIsVisible)
    }
    
    // Toggle the mode theme
    const setModeTheme = ()=>{
        let newModeTheme = !isDarkModeTheme

        setDarkModeTheme(newModeTheme)

        // Storage of theme
        if(newModeTheme){
            controlDarkMode(true)
            setLocalStorage("themeMode", "dark")

        } else{
            controlDarkMode(false)
            setLocalStorage("themeMode", "light")
        }
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