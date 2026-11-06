import '../login/login.css'
import { AuthenticationLayout } from '../../components/authentication/AuthenticationLayout.tsx'
import { Button } from '../../components/Button.tsx'

export function Register(){
    return (
        <AuthenticationLayout 
            title="Primeira vez por aqui?" 
            description="Preencha o formulário abaixo e se cadastre!">

            <form action="">
                <div className="fields-container">
                    <div className="label-input-div">
                        <label>Nome:</label>
                        <input type="text"/>
                    </div>

                    <div className="label-input-div">
                        <label>E-mail</label>
                        <input type="email" />
                    </div>

                    <div className="label-input-div">
                        <label>Senha:</label>
                        <input type="password"/>
                    </div>

                    <div className="label-input-div">
                        <label>Confirmação de Senha:</label>
                        <input type="password"/>
                    </div>
                    <Button typeButton="submit">Cadastrar</Button>
                </div>
            </form>
            
        </AuthenticationLayout>
    )
}