export function urlToId(url: string) {
    const parsed: string[] = url.split("=")
    return parsed[parsed.length - 1]
}