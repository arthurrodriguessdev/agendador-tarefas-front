export interface Task{
    id: number,
    nomeTarefa: string,
    descricaoTarefa: string,
    dataCriacao: string,
    dataEvento: string,
    status: string
}

export type CreateTask = Omit<Task, "id" | "status" | "dataCriacao">