export function NotFoundHandler(){
    return (
        <div>
            <h1>404</h1>
            <p>Página não encontrada</p>
        </div>
    )
}

export function BadRequestHandler(){
    return (
        <div>
            <h1>400</h1>
            <p>Requisição inválida</p>
        </div>
    )
}

export function UnauthorizedHandler(){
    return (
        <div>
            <h1>401</h1>
            <p>Não autenticado</p>
        </div>
    )
}

export function ForbiddenHandler(){
    return (
        <div>
            <h1>403</h1>
            <p>Acesso negado</p>
        </div>
    )
}

export function InternalServerErrorHandler(){
    return (
        <div>
            <h1>500</h1>
            <p>Erro interno do servidor</p>
        </div>
    )
}