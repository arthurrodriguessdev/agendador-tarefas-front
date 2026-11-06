import { AuthenticationForm } from "../authentication/AuthenticationForm.tsx"
import type { AuthenticationFormProps } from "../authentication/AuthenticationForm.tsx"

interface AuthenticationLayoutProps extends AuthenticationFormProps{
    title: string
    description: string
}

export function AuthenticationLayout({ children, title, description }: AuthenticationLayoutProps){
    return (
        <div className="login-container">
            <div className="left-side">
                <h1>TaskMaster</h1>

                <div className="left-content">
                    <h2>Tudo que você precisa para um dia produtivo!</h2>
                    <p>
                        Gerencie todas as suas tarefas, acompanhe
                        suas atividades e receba notificações em um 
                        único lugar!
                    </p>
                </div>
            </div>

            <div className="right-side">
                <div className="right-content">
                    <div>
                        <h2>{title}</h2>
                        <p>{description}</p>
                    </div>

                    <AuthenticationForm>
                        {children}
                    </AuthenticationForm>
                </div>
            </div>
        </div>
    )
}