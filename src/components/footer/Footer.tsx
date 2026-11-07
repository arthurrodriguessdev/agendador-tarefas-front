export function Footer(){
    return (
        <footer className="footer">
            <div className="footer-content">
                <strong>TaskMaster</strong>
                <span>Organize suas tarefas, otimize seu tempo.</span>
            </div>
            
            <p>© {new Date().getFullYear()} TaskMaster. Todos os direitos reservados.</p>
        </footer>
    )
}