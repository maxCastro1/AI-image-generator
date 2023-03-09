import { surpriseMePrompts } from "../constant/index";
import FileSaver from 'file-saver'
export function getRandomPrompt(prompt) {
    const randomIndex = Math.floor(Math.random() * surpriseMePrompts.length)
    const radomPrompt =surpriseMePrompts[randomIndex];

    if(radomPrompt === prompt) return getRandomPrompt(prompt);
    return radomPrompt
}

export async function downloadImage(_id, photo){
    FileSaver.saveAs(photo, `download-${_id}.jpg`)
}