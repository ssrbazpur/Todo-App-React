import CancelIcon from "@material-ui/icons/Cancel";

const Task = ({ task, onDelete }) => {
  return (
    <div>
      <h3>
        {task.text} <CancelIcon onClick={() => onDelete(task.id)}></CancelIcon>
      </h3>
      <p>{task.day}</p>
    </div>
  );
};

export default Task;

//State is passed down and actions is passed up.
