export default class Connector {

    static async fetchAllTasks() {
        let url = "localhost:5000/todos";

        let response = await fetch(url);
        let response_json = await response.json();
        return response_json;
    }
}