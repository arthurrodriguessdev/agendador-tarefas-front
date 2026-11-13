import type { ReactNode } from "react"

interface ButtonProps{
    typeButton?: "button" | "submit" | "reset"
    className?: string
    children: ReactNode
    onClick?: ()=> void
}

export function Button({ 
    typeButton="button", 
    className="btn-default",
    children,
    onClick
}: ButtonProps){

    return (
        <button className={className} type={typeButton} onClick={onClick}>{ children }</button>
    )
}