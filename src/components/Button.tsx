interface ButtonProps{
    typeButton?: "button" | "submit" | "reset"
    className?: string
}

export function Button({ typeButton="button", className="btn-default" }: ButtonProps){
    return (
        <button className={className} type={typeButton}></button>
    )
}