interface PageHandlerProps{
    httpCode: "400" | "401" | "403" | "404" | "500"
    titleError: string,
    subtitleError: string,
}

export function DefaultPageHandler({ titleError, subtitleError, httpCode }: PageHandlerProps){
    return(
        <div className="container-error-handler">
            <h1>{httpCode}</h1>
            <h2>{titleError}</h2>
            <p>{subtitleError}</p>
        </div>
    )
}

// Specific handlers, errors: 400, 401, 403, 404, 500
export function NotFoundHandler(){
    return (
        <DefaultPageHandler 
            httpCode="404"
            titleError="Página não encontrada"
            subtitleError="Parece que a página que você está procurando não existe ou foi movida."
        />
    )
}

export function BadRequestHandler(){
    return (
        <DefaultPageHandler
            httpCode="400"
            titleError="Requisição inválida"
            subtitleError="Não foi possível processar sua solicitação. Verifique os dados enviados e tente novamente."
        />
    )
}

export function UnauthorizedHandler(){
    return (
        <DefaultPageHandler
            httpCode="401"
            titleError="Autenticação necessária"
            subtitleError="Você precisa estar autenticado para acessar este recurso. Faça login e tente novamente."
        />
    )
}

export function ForbiddenHandler(){
    return (
        <DefaultPageHandler
            httpCode="403"
            titleError="Acesso negado"
            subtitleError="Você não tem permissão para acessar esta página."
        />
    )
}

export function InternalServerErrorHandler(){
    return (
        <DefaultPageHandler
            httpCode="500"
            titleError="Algo deu errado!"
            subtitleError="Ocorreu um erro inesperado em nossos servidores. Tente novamente mais tarde."
        />
    )
}