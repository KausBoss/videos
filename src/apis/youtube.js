import axios from "axios";

const KEY = "AIzaSyCHmwvz3dbi30OM1U8N3_-4_Gnks4fTe5k";

export default axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3",
    params: {
        part: "snippet",
        maxResults: 5,
        key: KEY,
    },
});
