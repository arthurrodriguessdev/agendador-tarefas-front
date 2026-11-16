import { format } from "date-fns"
import { useTasksData } from "../../services/taskService"
import type { Task } from "../../types/Task.ts"
import { TaskStatus } from "../../types/enums/tasksEnum.ts"
import { ClipboardList, Clock, Bell, CircleX } from "lucide-react"

export function Index(){
    const { data } = useTasksData()

    const listPendingTask: Task[] = []
    const listNotifiedTask: Task[] = []
    const listCancelledTask: Task[] = []

    // Filter tasks by status and add them to the corresponding lists
    data?.forEach((task: Task) => {
        if(task.status === TaskStatus.PENDENTE){
            listPendingTask.push(task)
        } else if(task.status === TaskStatus.CANCELADO){
            listCancelledTask.push(task)
        } else{
            listNotifiedTask.push(task)
        }
    });

    const totalTasks = data ? data?.length : 0
    const dateNow = format(Date.now(), "EEEE, MMMM d")

    return(
        <div>
            <div className="sub-header-div">
                <div>
                    <span className="date-span">
                        {dateNow}
                    </span>
                    <h1>Olá, Arthur!</h1>
                </div>
            </div>
            <div className="task-cards">
                <div className="task-card">
                    <span className="task-card-icon total"><ClipboardList /></span>
                    <div>
                        <p>{totalTasks}</p>
                        <h3>Total de Tarefas</h3>
                    </div>
                </div>

                <div className="task-card">
                    <span className="task-card-icon pending"><Clock /></span>
                    <div>
                        <p>{listPendingTask.length}</p>
                        <h3>Pendentes</h3>
                    </div>
                </div>

                <div className="task-card">
                    <span className="task-card-icon notified"><Bell /></span>
                    <div>
                        <p>{listNotifiedTask.length}</p>
                        <h3>Notificadas</h3>
                    </div>
                </div>

                <div className="task-card">
                    <span className="task-card-icon cancelled"><CircleX /></span>
                    <div>
                        <p>{listCancelledTask.length}</p>
                        <h3>Canceladas</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}