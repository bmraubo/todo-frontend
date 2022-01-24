export default class Connector {

    static async fetchAllTasks() {
        let url = "https://http-echo-server-8l.herokuapp.com/todos";

        let response = await fetch(url);
        let response_json = await response.json();
        return response_json;
    }

    static async deleteTask(id) {
        let url = `https://http-echo-server-8l.herokuapp.com/todo/${id}`;
        await fetch(url, {method: "DELETE"});
        return
    }
    
    static async changeDoneStatus(taskInfo) {
        let url = `https://http-echo-server-8l.herokuapp.com/todo/${taskInfo.id}`;
        await fetch(url, {method: "PUT"});
        return
    }

    static async addTask(userInput) {
        let url = 'https://http-echo-server-8l.herokuapp.com/todo'
        let taskInfo = {"task": userInput}
        return await (await fetch(url, {method: "POST", body: taskInfo})).json()
    }

    static async updateTask(taskData) {
        const url = `https://http-echo-server-8l.herokuapp.com/todo/${taskData.id}`
        return await (await fetch(url, {method: "PUT", body: taskData})).json()
    }
}
