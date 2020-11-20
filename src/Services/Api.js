import axios from 'axios';
const KEY = "AIzaSyDtssL09go7gTG_LvSlrDGlbDz31gjNiho";

// Axios Library
// Promise based library to perform http request like GET,POST,PUT,PATCH,DELETE,HEAD
export const baseParams = {
    part: 'snippet',
    maxResult: 10,
    key: KEY,
}
export default axios.create({
   baseURL : "https://www.googleapis.com/youtube/v3"
})

// window.fetch();
// axios.get()
// axios.post()
// axios.put()
// axios.delete()