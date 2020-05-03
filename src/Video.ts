export function urlToId(url: string) {
    const parsed: string[] = url.split("/")
    return parsed[parsed.length - 1]
}

export class Video {
    id: string;
    constructor(url: string) {
        this.id = urlToId(url);
    }
}

export const dummyVideo: Video = new Video("https://youtu.be/gdJjc6l6iII")