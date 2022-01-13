export default class Connector {
    static async fetchAllTasks() {
        let url = "0.0.0.0:5000/todos";

        let response = await fetch(url);
        let response_json = await response.json();
        return response_json;
    }

    static async deleteTask(id) {
        let url = `0.0.0.0:5000/todo/${id}`;
        await fetch(url, {method: "DELETE"});
        return
    }
    
    static async changeDoneStatus(taskInfo) {
        let url = `0.0.0.0:5000/todo/${taskInfo.id}`;
        await fetch(url, {method: "PUT"});
        return
    }
}
