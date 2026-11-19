export function setLocalStorage(key: any, value: any){
    localStorage.setItem(key, value)
}

export function getValueLocalStorage(key: any){
    return localStorage.getItem(key)
}