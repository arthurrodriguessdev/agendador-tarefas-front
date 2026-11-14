import { Spinner } from "../../components/Spinner.tsx"
import { useTasksData } from "../../services/taskService.ts"
import { TaskStatus } from "../../types/enums/tasksEnum.ts"
import type { CreateTask, Task } from "../../types/Task.ts"
import { Modal } from "../../components/Modal.tsx"
import { useState, type SubmitEvent as ReactSubmitEvent } from "react"
import { Button } from "../../components/Button.tsx"
import { createNewTask } from "../../services/taskService.ts"
import { format } from "date-fns"
import { QueryClient, useQueryClient } from "@tanstack/react-query"

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

async function handlerFormNewTask(
    event: ReactSubmitEvent, 
    { 
        onClose, 
        setErrorMessage,
        queryClient,
    }: {
        onClose: ()=>void, 
        setErrorMessage: (message: string)=>void, 
        queryClient: QueryClient
    }
){
    event.preventDefault()
    const data = new FormData(event.currentTarget as HTMLFormElement)
    const dataEvento = data.get("dataEvento") as string

    const newTask: CreateTask = {
        nomeTarefa: data.get("nomeTarefa") as string,
        descricaoTarefa: data.get("descricaoTarefa") as string,
        dataEvento: format(dataEvento, "dd-MM-yyyy HH:mm:ss")
    }

    try{
        await createNewTask(newTask)
        queryClient.invalidateQueries({
            queryKey: ["all-tasks-data"]
        })
        
        onClose()

    } catch(error: any){
        setErrorMessage(error.message)
    }
}

function NewTask({ onClose }: {onClose: ()=>void}){
    const [errorMessage, setErrorMessage] = useState("")
    const queryClient = useQueryClient() // Cache manager

    return ( 
        <Modal onClose={onClose}>
            <div className="modal-header">
                <h2>Nova tarefa</h2>
            </div>

            <div className="modal-body">
                <form onSubmit={
                    (event) => handlerFormNewTask(
                        event, { onClose, setErrorMessage, queryClient })}>
                    
                    {errorMessage && (<p className="error-message">{errorMessage}</p>)}
                    
                    <div className="fields-container">
                        <div className="label-input-div">
                            <label>Nome da tarefa:</label>
                            <input type="text" name="nomeTarefa" required/>
                        </div>

                        <div className="label-input-div">
                            <label>Descrição:</label>
                            <textarea maxLength={150} name="descricaoTarefa" required/>
                        </div>

                        <div className="label-input-div">
                            <label>Data do evento:</label>
                            <input type="datetime-local" name="dataEvento" required/>
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