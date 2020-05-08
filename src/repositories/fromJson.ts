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

export function fetchTipsFromId(id: string) {
    const tips_pair = json.tips
    for (let tips of tips_pair) {
        if (id === tips.id) {
            return tips.tip
        }
    }
    throw new Error("tips not found from id.")
}