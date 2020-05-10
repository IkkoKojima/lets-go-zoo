import { Tip } from "./Tip";
import { Video } from "./Video";

export class Exhibit {
    id: string;
    video: Video
    tips: Tip[]
    face: string
    constructor(id: string, video: Video, tips: Tip[]) {
        this.id = id;
        this.video = video;
        this.tips = tips;
        // this.face = `https://img.youtube.com/vi/${video.id}/maxres1.jpg`
        this.face = tips[0].img_url
    }
}