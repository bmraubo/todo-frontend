import "./tasklist.css"

export default function Task(props) {
    const taskMessage = `Task: ${props.task.task} &emsp; Status: ${DoneStatus(props.task.done)}`

    function Button(props) {
        return (
            <button data-testid={props.testid} onClick={props.handleClick}>
                {props.message}
            </button>
        )
    }

    async function changeDoneStatus({taskInfo}) {
        await props.connector.changeDoneStatus(taskInfo)
        props.getData()
    }

    async function DeleteTask({taskId}) {
        await props.connector.deleteTask(taskId);
        props.getData()
    }

    function DoneStatus(doneStatus) {
        if (doneStatus) {
            return "Completed!";
        } else {
            return "Not Done!";
        }
    }

    return (
        <div className="row">
            <div className="column">
                <Button testid={props.task.task} onClick={() => changeDoneStatus(props.task)} message={taskMessage}/>
            </div>
            <div className="columns">
                <Button testid={`Edit ${props.task.id}`} message="Edit"/>
                <Button taskId={`Delete task.id`} onClick={() => DeleteTask(props.task.id)} message="Delete"/>
            </div>
        </div>
    )
}