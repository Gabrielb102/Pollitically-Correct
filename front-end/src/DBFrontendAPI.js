import axios from "axios";

const BASE_URL = "http://localhost:3001";

class DBFrontendAPI {

    static async request(endpoint, data = {}, method = "get") {
        console.debug('API Call:', endpoint, data, method);

        const url = `${BASE_URL}/${endpoint}`;
        const params = (method === "get") ? data : {};
        try {
            return (await axios({ url, data, params, method })).data;
        } catch (err) {
            console.error("API Error:", err.response);
            let message = err.response.data.error.message;
            throw Array.isArray(message) ? message : [message];
        }
    }

    static async search(formData) {
        const res = await this.request(`request/candidates`, formData);
        return res.results ? res.results : [];
    }

    static async getCandData(candidateId) {
        const res = await this.request(`request/candidate/${candidateId}`);
        return res;
    }

    static async getFinData(candidateId) {
        const res = await this.request(`request/info/${candidateId}`);
        return res;
    }

    static async getCommittees(candidateId, year) {
        const res = await this.request(`request/candidate/${candidateId}/committees`, {cycle : year});
        return res;
    }

    static async getCommContributions(committeeId, cycle) {
        const res = await this.request(`request/comminfo/contributions`, {committeeId : committeeId, cycle: cycle});
        return res;
    }
}

export default DBFrontendAPI;