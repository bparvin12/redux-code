import axios from 'axios';

const KEY = 'AIzaSyBV-CNw790cr-PT0SY8LIiaz0sDhn-KdKU'

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: `${KEY}`
    }
})
