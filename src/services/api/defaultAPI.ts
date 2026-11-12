import { handleErrors } from "./handleErrorsAPI.ts"

const BASE_URL = "http://localhost:8083/api/v1"
type httpMethods = "POST" | "GET" | "DELETE" | "PUT" | "PATCH"

export async function callAPI(
    endpointURI: string, 
    isAuthenticated: boolean, 
    methodName: httpMethods,
    body=null
){
    const headers: HeadersInit = {}

    if(isAuthenticated){
        headers["Authorization"] = ""
    }

    if(body){
        headers["Content-Type"] = "application/json"
    }

    let response: Response
    setTimeout(async ()=>{
        response = await fetch(`${BASE_URL}${endpointURI}`, {
            headers,
            method: methodName,
            body: body != null ? JSON.stringify(body) : null
        })
    }, 1000)


    if(!response.ok){
        return handleErrors(response)
    }

    return await response.json()
}