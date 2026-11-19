import { Link } from "react-router-dom"
import { Bell, UserRound, LogOut, PanelLeftClose, PanelLeftOpen } from "lucide-react"
import { Button } from "../Button.tsx"

interface HeaderProps{
    isVisible: boolean
    isDarkModeTheme: boolean
    setVisibilitySideBar: () => void
    setModeTheme: () => void
}

export function Header({ setVisibilitySideBar, setModeTheme, isVisible, isDarkModeTheme }: HeaderProps){
    let classNameBtnSidebar = isVisible ? "sidebar-toggle active" : "sidebar-toggle"

    return (
        <header className="header">
            <div className="header-brand">
                <button className={classNameBtnSidebar} onClick={setVisibilitySideBar}>
                    {isVisible ? <PanelLeftClose/> : <PanelLeftOpen/>}
                </button>

                <h3>TaskMaster</h3>
            </div>

            <nav>
                <Link to=""><Bell size={22} /></Link>
                <Link to=""><UserRound size={22} /></Link>
                <Link to=""><LogOut size={22} /></Link>

                <Button onClick={setModeTheme} typeButton="button" className="btn-reset">
                    <div className={`toggle-theme-div ${isDarkModeTheme ? "activated" : ""}`}>
                        <div />
                    </div>
                </Button>
            </nav>
        </header>
    )
}