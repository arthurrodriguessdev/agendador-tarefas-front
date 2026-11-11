import { callAPI } from "./api/defaultAPI.ts"

export async function getAllTasks(){
    console.log(callAPI("/tarefas", true, "GET"))
}