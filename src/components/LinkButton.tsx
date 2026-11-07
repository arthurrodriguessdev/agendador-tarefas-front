import type { ReactNode } from "react";
import { Link } from "react-router-dom";

interface LinkButtonProps{
    toUrl: string
    children: ReactNode
}

export function LinkButton({ toUrl, children }: LinkButtonProps){
    return (
        <Link className="btn-default" to={toUrl}>{children}</Link>
    )
}