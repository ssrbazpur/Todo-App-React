import CancelIcon from "@material-ui/icons/Cancel";

const Task = ({ task, onDelete, onToggle }) => {
  return (
    <div
      className={`task ${task.reminder ? "reminder" : ""}`}
      onDoubleClick={() => onToggle(task.id)}
    >
      <h3>
        {task.text} <CancelIcon onClick={() => onDelete(task.id)}></CancelIcon>
      </h3>
      <p>{task.date}</p>
    </div>
  );
};

export default Task;

//State is passed down and actions is passed up.
