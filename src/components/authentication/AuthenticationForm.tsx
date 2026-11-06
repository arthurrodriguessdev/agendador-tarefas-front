import type { ReactNode } from "react"

export interface AuthenticationFormProps{
    children: ReactNode
}

export function AuthenticationForm({ children }: AuthenticationFormProps){
    return(
        <div className="container-form">
            {children}
        </div>
    )
}