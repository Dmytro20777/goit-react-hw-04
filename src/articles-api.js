import axios from "axios";

const ACCESS_KEY = "mml5H8_z0BG3SsTPZTosshNWLOPlMSBhyfB4AWY6G5Y";

axios.defaults.baseURL = "https://api.unsplash.com";

export const fetchimagesWithTopic = async (topic, page) => {
    const response = await axios("/search/photos", {
        params: {
            query: topic,
            page: page,
            per_page: 10,
            client_id: ACCESS_KEY,
        }
    });
    return response.data
} 