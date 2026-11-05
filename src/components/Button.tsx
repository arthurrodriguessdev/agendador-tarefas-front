import type { ReactNode } from "react"

interface ButtonProps{
    typeButton?: "button" | "submit" | "reset"
    className?: string
    children: ReactNode
}

export function Button({ 
    typeButton="button", 
    className="btn-default",
    children
}: ButtonProps){

    return (
        <button className={className} type={typeButton}>{ children }</button>
    )
}