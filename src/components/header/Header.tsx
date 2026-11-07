import { Link } from "react-router-dom"
import { Bell, UserRound, LogOut, PanelLeftClose, PanelLeftOpen } from "lucide-react"

interface HeaderProps{
    isVisible: boolean
    setVisibilitySideBar: () => void
}

export function Header({ setVisibilitySideBar, isVisible }: HeaderProps){
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
            </nav>
        </header>
    )
}