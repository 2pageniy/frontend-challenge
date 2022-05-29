import axios from "axios";

export default class CatsService {
    static async getAll(limit = 20, page = 1) {
        const response = await axios.get('https://api.thecatapi.com/v1/images/search', {
            params: {
                limit: limit,
                page: page
            }
        });
        return response;
    }
}