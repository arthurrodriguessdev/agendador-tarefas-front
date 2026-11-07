import { Link } from "react-router-dom"

export function Sidebar(){
    return (
        <div className="sidebar">
            <ul>
                <li><Link to="">Início</Link></li>
                <li><Link to="">Tarefas</Link></li>
            </ul>
        </div>
    )
}