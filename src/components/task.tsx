import { InputHTMLAttributes } from "react";
import { TrashIcon } from "./icons/Trash";

interface TaskProps extends InputHTMLAttributes<HTMLInputElement> {
  isCompleted: boolean;
  task: string;
  deleteTask: (task: string) => void;
}

export function Task({
  isCompleted,
  task = "",
  deleteTask,
  ...props
}: TaskProps) {
  return (
    <div className="p-4 rounded-lg bg-gray500 flex items-center justify-between mt-4">
      <div className="flex gap-3 items-center">
        <input
          className="group w-6 h-6 checked:bg-purpleLight  text-purpleDark bg-gray500 rounded-full border-blueLight hover:bg-blueDark active:outline-none active:border-none active:hover:bg-purpleLight active:hover:outline-purpleLight"
          type="checkbox"
          id="task-box"
          {...props}
        />
        <label
          htmlFor="task-box"
          className="group-checked:text-gray300 group-checked:decoration-dashed  text-gray100"
        >
          {task}
        </label>
      </div>
      <TrashIcon onClick={deleteTask} props={undefined} />
    </div>
  );
}
