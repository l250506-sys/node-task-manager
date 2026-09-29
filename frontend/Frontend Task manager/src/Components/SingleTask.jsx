import clsx from "clsx";

export default function SingleTask({ task, deleteTask, toggleTask }) {

  const taskClass = clsx("single-task", {
    underline: task.status
  });

  return (
    <div className={taskClass}>
      <p>{task.value}</p>

      <div className="done-del">
        <button className="done" onClick={toggleTask}>
          {task.status ? "Undo" : "Done"}
        </button>

        <button className="del" onClick={deleteTask}>
          Delete
        </button>
      </div>
    </div>
  );
}