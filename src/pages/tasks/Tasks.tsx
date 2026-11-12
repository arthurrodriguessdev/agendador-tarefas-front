import { LinkButton } from "../../components/LinkButton"
import { Spinner } from "../../components/Spinner.tsx"
import { useTasksData } from "../../services/taskService.ts"

export function Tasks(){
    const { data, isLoading, isError } = useTasksData()

    const taskList = data?.map(task=>{
        return (
            <tr key={task.id}>
                <td>{task.nomeTarefa}</td>
                <td>{task.descricaoTarefa}</td>
            </tr>
        )})

    return(
        <div>
            {isLoading && <Spinner/>}
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
                        {taskList}
                    </tbody>
                </table>
            </div>
        </div>
    )
}