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
        taskInfo.done = !taskInfo.done;
        console.log(taskInfo)
        let url = `https://http-echo-server-8l.herokuapp.com/todo/${taskInfo.id}`;
        return await (await fetch(url, {method: "PUT", headers: new Headers({'content-type': 'application/x-www-form-urlencoded'}), body: JSON.stringify(taskInfo)})).json();
    }

    static async addTask(userInput) {
        let url = 'https://http-echo-server-8l.herokuapp.com/todo'
        console.log(userInput)
        let taskInfo = {"task": userInput}
        return await (await fetch(url, {method: "POST", headers: new Headers({'content-type': 'application/x-www-form-urlencoded'}), body: JSON.stringify(taskInfo)})).json()
    }

    static async updateTask(taskData) {
        const url = `https://http-echo-server-8l.herokuapp.com/todo/${taskData.id}`
        return await (await fetch(url, {method: "PUT", headers: new Headers({'content-type': 'application/x-www-form-urlencoded'}), body: JSON.stringify(taskData)})).json()
    }
}
