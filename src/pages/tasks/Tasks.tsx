import { Spinner } from "../../components/Spinner.tsx"
import { useTasksData } from "../../services/taskService.ts"
import { TaskStatus } from "../../types/enums/tasksEnum.ts"
import type { Task } from "../../types/Task.ts"
import { Modal } from "../../components/Modal.tsx"
import { useState } from "react"
import { Button } from "../../components/Button.tsx"

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

function NewTask({ onClose }: {onClose: ()=>void}){
    return ( 
        <Modal onClose={onClose}>
            <div className="modal-header">
                <h2>Nova tarefa</h2>
            </div>

            <div className="modal-body">
                <form>
                    <div className="fields-container">
                        <div className="label-input-div">
                            <label>Nome da tarefa:</label>
                            <input type="text"/>
                        </div>

                        <div className="label-input-div">
                            <label>Descrição:</label>
                            <textarea maxLength={150}/>
                        </div>

                        <div className="label-input-div">
                            <label>Data do evento:</label>
                            <input type="datetime-local"/>
                        </div>
                        <Button typeButton="submit">Criar Tarefa</Button>
                    </div>
                </form>         
            </div>
        </Modal>
    )
}

export function Tasks(){
    const { data, isLoading, isError } = useTasksData()
    const [openModalCreateTask, setOpenModalCreateTask] = useState(false)

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
                <Button 
                    className="btn-default add" 
                    onClick={()=> setOpenModalCreateTask(true)}>
                        Nova Tarefa
                </Button>
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

            {openModalCreateTask && <NewTask onClose={()=>setOpenModalCreateTask(false)}/>}

        </div>
    )
}