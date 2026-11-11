function getDefaultMessageError(statusCode: number){
    const defaultMessagesError: Record<number, string> = {
        400: "Requisição inválida.",
        401: "Você precisa realizar login para continuar.",
        403: "Você não tem permissão para realizar esta operação.",
        404: "Recurso não encontrado.",
        405: "Método HTTP não permitido.",
        409: "Conflito ao processar a requisição.",
        422: "Não foi possível processar os dados enviados.",
        429: "Muitas requisições. Tente novamente mais tarde.",
        500: "Erro interno do servidor.",
        502: "Serviço temporariamente indisponível.",
        503: "Serviço indisponível no momento."
    }

    return defaultMessagesError[statusCode]
}

export async function handleErrors(response: Response){
    const responseData = await response.json()
    if(responseData.message){
        throw new Error(responseData.message)
    }

    const messageDefault = getDefaultMessageError(response.status)
    throw new Error(messageDefault)
}