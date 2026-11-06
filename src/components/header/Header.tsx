import { Link } from "react-router-dom"
import { Bell, UserRound, LogOut } from "lucide-react"

export function Header(){
    return (
        <header className="header">
            <h3>TaskMaster</h3>

            <nav>
                <Link to="">
                    <Bell size={22} />
                </Link>

                <Link to="">
                    <UserRound size={22} />
                </Link>

                <Link to="">
                    <LogOut size={22} />
                </Link>
            </nav>
        </header>
    )
}