import './login.css'
import { AuthenticationLayout } from '../../components/authentication/AuthenticationLayout.tsx'
import { Button } from '../../components/Button.tsx'
import { Link } from 'react-router-dom'

export function Login(){
    return (
        <AuthenticationLayout 
            title="Seja bem-vindo!" 
            description="Realize seu login e comece a projetar sua próxima atividade!">

            <form action="">
                <div className="fields-container">
                    <div className="label-input-div">
                        <label>E-mail:</label>
                        <input type="email"/>
                    </div>

                    <div className="label-input-div">
                        <label>Senha:</label>
                        <input type="password"/>
                    </div>
                    <Button typeButton="submit">Entrar</Button>
                </div>
                <span>
                    <Link to="/auth/register/">Não tem conta? Clique aqui</Link>
                </span>
            </form>   
        </AuthenticationLayout>
    )
}