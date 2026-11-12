import { useQuery } from "@tanstack/react-query"
import { callAPI } from "./api/defaultAPI.ts"

export async function getAllTasks(){
    return await callAPI("/tarefas", true, "GET")
}

export function useTasksData(){
    return useQuery({
        queryFn: getAllTasks,
        queryKey: ["all-tasks-data"],
    })
}