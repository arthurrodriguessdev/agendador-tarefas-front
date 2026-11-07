import { LinkButton } from "../../components/LinkButton"

export function Tasks(){
    return(
        <div>
            <div className="sub-header-div">
                <h1>Tarefas</h1>
                <LinkButton toUrl="">Nova Tarefa</LinkButton>
            </div>

            <div>
                <table>
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th>Descrição</th>
                            <th>Data de Criação</th>
                            <th>Agendada Para</th>
                            <th>Status</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <td>teste</td>
                            <td>teste</td>
                            <td>teste</td>
                            <td>teste</td>
                            <td>teste</td>
                        </tr>
                        <tr>
                            <td>teste</td>
                            <td>teste</td>
                            <td>teste</td>
                            <td>teste</td>
                            <td>teste</td>
                        </tr>
                        <tr>
                            <td>teste</td>
                            <td>teste</td>
                            <td>teste</td>
                            <td>teste</td>
                            <td>teste</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}