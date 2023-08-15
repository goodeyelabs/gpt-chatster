export function formatDate(input:string) {
    const epoch = parseInt(input)
    const d = new Date(epoch * 1000).toDateString()
    const t = new Date(epoch * 1000).toLocaleTimeString('en-US')
    return d + ' ' + t
}