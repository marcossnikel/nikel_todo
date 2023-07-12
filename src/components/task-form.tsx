import { ChangeEvent, FormEvent, InvalidEvent } from "react";
import { useState } from "react";
import Button from "./button";
import { PlusIcon } from "./icons";

export default function TasksForm() {
  const [tasks, setTasks] = useState<string[]>([]);
  const [newTask, setNewTask] = useState<string>("");

  function handleNewTaskChange(event: ChangeEvent<HTMLInputElement>) {
    event.target.setCustomValidity("");
    setNewTask(event.target.value);
  }

  function handleCreateNewTask(event: FormEvent) {
    event.preventDefault();
    setTasks([...tasks, newTask]);
    console.log(tasks);

    setNewTask("");
  }

  function handleNewTaskInvalid(event: InvalidEvent<HTMLInputElement>) {
    event.target.setCustomValidity("This field is required !!");
  }

  const isNewTasksEmpty = tasks.length === 0;

  return (
    <form
      className="gap-2 flex  justify-center"
      onSubmit={(e) => handleCreateNewTask(e)}
    >
      <input
        onChange={handleNewTaskChange}
        onInvalid={handleNewTaskInvalid}
        value={newTask}
        className="focus:outline-none focus:border focus:border-purpleDark w-[638px] rounded-lg bg-gray500 p-4 text-gray100 placeholder:text-gray300"
        type="text"
        placeholder="Adicionar uma nova tarefa"
      />
      <Button disabled={isNewTasksEmpty}>
        Criar
        <PlusIcon />
      </Button>
    </form>
  );
}
