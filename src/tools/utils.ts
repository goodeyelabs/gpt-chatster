export function formatDate(input:number) {
    const date = new Date(input * 1000)
    return date.toDateString()
}