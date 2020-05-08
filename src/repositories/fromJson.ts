import json from '../data/DB.json'
import { Exhibit } from '../domains/Exhibit'
import { urlToId } from '../utils/VideoUtils'
import { Video } from '../domains/Video'
import { Tip } from '../domains/Tip'

export function fetchAll() {
    let exhibits: Exhibit[] = []
    json.map(item => {
        const videoId = urlToId(item.video_url)
        const video: Video = new Video(videoId)
        let tips: Tip[] = []
        if (item.tip1_img !== "" && item.tip1_txt !== "") {
            tips.push(new Tip(item.tip1_img, item.tip1_txt))
        }
        if (item.tip2_img !== "" && item.tip2_txt !== "") {
            tips.push(new Tip(item.tip2_img, item.tip2_txt))
        }
        if (item.tip3_img !== "" && item.tip3_txt !== "") {
            tips.push(new Tip(item.tip3_img, item.tip3_txt))
        }
        const id = item.id
        exhibits.push(new Exhibit(id, video, tips))
        return {}
    })
    return exhibits
}