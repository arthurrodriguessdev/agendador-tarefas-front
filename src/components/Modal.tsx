import { useEffect, useRef, type ReactNode } from "react";

interface ModalProps {
    children: ReactNode
    onClose: () => void
}

export function Modal({ children, onClose }: ModalProps){
    const dialogRef = useRef<HTMLDialogElement>(null)

    function closeModal(){
        dialogRef.current?.close()
        onClose()
    }
    
    useEffect(()=>{
        dialogRef.current?.showModal()
    }, [])

    return (
        <dialog ref={dialogRef} className="modal">
            <button className="modal-close" onClick={closeModal}>×</button>
            {children}
        </dialog>
    )
}