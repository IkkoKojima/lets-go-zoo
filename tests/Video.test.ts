import { urlToId } from '../src/utils/VideoUtils'

describe('urlToId', (): void => {
    test("convert youtube url to id", (): void => {
        const response: string = urlToId("https://youtu.be/gdJjc6l6iII")
        expect(response).toBe("gdJjc6l6iII")
    })
})