import { handleErrors } from "./handleErrorsAPI.ts"

const BASE_URL = "http://localhost:8083/api/v1"
type httpMethods = "POST" | "GET" | "DELETE" | "PUT" | "PATCH"

export async function callAPI(
    endpointURI: string, 
    isAuthenticated: boolean, 
    methodName: httpMethods,
    body?: any
){
    const headers: HeadersInit = {}

    if(isAuthenticated){
        headers["Authorization"] = "Bearer "
    }

    if(body){
        headers["Content-Type"] = "application/json"
    }

    const response = await fetch(`${BASE_URL}${endpointURI}`, {
        headers,
        method: methodName,
        body: body != null ? JSON.stringify(body) : null
    })

    if(!response.ok){
        return handleErrors(response)
    }

    return await response.json()
}