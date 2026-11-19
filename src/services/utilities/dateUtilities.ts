export function stringToISOFormat(stringDate: string){
    /**
     * Receives a date string in the following format: 21-11-2026 22:02:00
     * Splits the date and time components and converts them to ISO 8601 format (YYYY-MM-DDTHH:mm:ss).
     */
    const [date, time] = stringDate.split(" ")
    const [hour, minute, seconds] = time.split(":")
    const [day, month, year] = date.split("-")
    return `${year}-${month}-${day}T${hour}:${minute}:${seconds}`
}