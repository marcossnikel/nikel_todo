import { InputHTMLAttributes } from "react";
import { TrashIcon } from "./icons/Trash";
import { Task as TaskType } from "../App";
interface TaskProps extends InputHTMLAttributes<HTMLInputElement> {
  task: TaskType;
  onDeleteTask: (task: string) => void;
  handleToggleTask: (taskName: string) => void;
}

export function Task({
  task,
  onDeleteTask,
  handleToggleTask,
  ...props
}: TaskProps) {
  function handleDeleteTask() {
    onDeleteTask(task.task);
  }
  return (
    <div className="p-4 rounded-lg bg-gray500 flex items-center justify-between mt-4">
      <div className="flex gap-3 items-center">
        <input
          className="group w-6 h-6 checked:bg-purpleLight  text-purpleDark bg-gray500 rounded-full border-blueLight hover:bg-blueDark "
          type="checkbox"
          id="task-box"
          onClick={() => handleToggleTask(task.task)}
          {...props}
        />
        <label
          htmlFor="task-box"
          className={` ${
            task.completed ? " text-gray300 line-through" : "text-gray100"
          } `}
        >
          <p>{task.task}</p>
        </label>
      </div>
      <TrashIcon onClick={handleDeleteTask} />
    </div>
  );
}
