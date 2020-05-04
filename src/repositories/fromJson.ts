import json from '../data/DB.json'

export function fetchIds() {
    return json.ids
}

export function fetchVideoUrlFromId(id: string) {
    const pairs = json.video_urls
    for (let pair of pairs) {
        if (id === pair.id) {
            return pair.video_url
        }
    }
    throw new Error("video not found from id.")
}