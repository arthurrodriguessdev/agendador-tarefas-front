import { useQuery } from "@tanstack/react-query"
import { callAPI } from "./api/defaultAPI.ts"
import type { Task } from "../types/Task.ts"

export async function getAllTasks(){
    return await callAPI("/tarefas", true, "GET")
}

export async function createNewTask(newTask: Task){
    return await callAPI("/tarefas", true, "POST", newTask)
}

export function useTasksData(){
    return useQuery({
        queryFn: getAllTasks,
        queryKey: ["all-tasks-data"],
    })
}