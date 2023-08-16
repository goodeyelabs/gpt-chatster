export function formatDate(input:string) {
    const options:object = {
        year: "numeric",
        month: "numeric",
        day: "numeric",
    }

    const epoch = parseInt(input)
    const d = new Date(epoch * 1000).toLocaleDateString('en-US', options)
    const t = new Date(epoch * 1000).toLocaleTimeString('en-US')
    return t + ' ' + d
}