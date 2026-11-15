import { format } from "date-fns"

export function Index(){
    // const { data, isLoading, isError } = useTasksData()
    // const [openModalCreateTask, setOpenModalCreateTask] = useState(false)
    // const queryClient = useQueryClient()

    // if(isLoading){
    //     return(<Spinner/>)
    // }

    // if(isError){
    //     return( <h1>Erro ao fazer a requisição</h1> )
    // }

    // const taskList = data?.map((task: Task)=>{
    //     return (
    //         <tr key={task.id}>
    //             <td>
    //                 <div className="table-actions">
    //                     <Link to={""} className="action-edit"><EditIcon/></Link>

    //                     <button 
    //                         type="button"
    //                         onClick={() => TaskDelete(task.id, queryClient)}
    //                         title="Excluir tarefa"
    //                         className="action-delete"
    //                     >
    //                         <TrashIcon/>
    //                     </button>
    //                 </div>
    //             </td>
    //             <td>{task.nomeTarefa}</td>
    //             <td>{task.descricaoTarefa}</td>
    //             <td>{task.dataCriacao}</td>
    //             <td>{task.dataEvento}</td>
    //             <td>
    //                 <span className={getClassNameStatusTaskBadge(task.status)}>
    //                     {task.status}
    //                 </span>
    //             </td>
    //         </tr>
    //     )})

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

                {/* <Button 
                    className="btn-default add" 
                    onClick={()=> setOpenModalCreateTask(true)}>
                        Nova Tarefa
                </Button> */}
            </div>

            {/* <div>
                <table>
                    <thead>
                        <tr>
                            <th>Ações</th>
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
            </div> */}

            {/* {openModalCreateTask && <NewTask onClose={()=>setOpenModalCreateTask(false)}/>} */}

        </div>
    )
}