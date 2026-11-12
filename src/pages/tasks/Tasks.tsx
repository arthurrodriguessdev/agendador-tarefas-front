import { LinkButton } from "../../components/LinkButton"
import { Spinner } from "../../components/Spinner.tsx"
import { useTasksData } from "../../services/taskService.ts"
import { TaskStatus } from "../../types/enums/tasksEnum.ts"
import type { Task } from "../../types/Task.ts"

function getClassNameStatusTaskBadge(statusTask: string):string{
    switch(statusTask){
        case TaskStatus.PENDENTE:
            return "badge warning"
        case TaskStatus.CANCELADO:
            return "badge error"
        case TaskStatus.NOTIFICADO:
            return "badge success"
        default:
            return "badge info"
    }
}

export function Tasks(){
    const { data, isLoading, isError } = useTasksData()

    if(isLoading){
        return(<Spinner/>)
    }

    if(isError){
        return( <h1>Erro ao fazer a requisição</h1> )
    }

    const taskList = data?.map((task: Task)=>{
        return (
            <tr key={task.id}>
                <td>{task.nomeTarefa}</td>
                <td>{task.descricaoTarefa}</td>
                <td>{task.dataCriacao}</td>
                <td>{task.dataEvento}</td>
                <td>
                    <span className={getClassNameStatusTaskBadge(task.status)}>
                        {task.status}
                    </span>
                </td>
            </tr>
        )})

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
                        {taskList}
                    </tbody>
                </table>
            </div>
        </div>
    )
}