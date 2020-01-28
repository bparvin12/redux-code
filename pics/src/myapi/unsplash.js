import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID 91c96cb222c3dafa1a6ddc758e12a1ed967b0882b0947b1b2184a510127d64c9'
    }
});