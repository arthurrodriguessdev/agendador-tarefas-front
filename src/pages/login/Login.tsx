import './login.css'
import {Button} from '../../components/Button.tsx'

export function Login(){
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
                        <h2>Seja bem-vindo!</h2>
                        <p>
                            Realize seu login e comece a projetar
                            sua próxima atividade!
                        </p>
                    </div>
                    <div className="container-form">
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
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}