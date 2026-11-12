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
        headers["Authorization"] = "Bearer eyJhbGciOiJIUzM4NCJ9.eyJzdWIiOiJzYW50b3NAZ21haWwuY29tIiwiaWF0IjoxNzk0NTAxMzMzLCJleHAiOjE3OTQ1MDQ5MzN9.Iq7E98Vsbkn9B9gfVBg9OXywuaFBcZZntNB3A-alyozpkWWbp5UqUCLwXZ_bAh3K"
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