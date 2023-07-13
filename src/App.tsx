import { useState, ChangeEvent, FormEvent, InvalidEvent } from "react";
import Button from "./components/button";
import { Task } from "./components/task";
import { FormPlaceholder, PlusIcon, RocketIcon } from "./components/icons";

export type Task = {
  task: string;
  completed: boolean;
};

function App() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [newTask, setNewTask] = useState<string>("");

  const amountOfCompleted = tasks.filter(
    (task) => task.completed === true
  ).length;
  const amounfOfTasks = tasks.length;
  function handleNewTaskChange(event: ChangeEvent<HTMLInputElement>) {
    event.target.setCustomValidity("");
    setNewTask(event.target.value);
  }

  function handleToggleTask(taskName: string) {
    const completeTask = tasks.map((task) => {
      if (task.task === taskName) {
        task.completed = !task.completed;
      }
      return task;
    });

    setTasks(completeTask);
  }

  function handleCreateNewTask(event: FormEvent) {
    event.preventDefault();
    setTasks([
      ...tasks,
      {
        task: newTask,
        completed: false,
      },
    ]);
    setNewTask("");
  }
  function handleNewTaskInvalid(event: InvalidEvent<HTMLInputElement>) {
    event.target.setCustomValidity("This field is required !!");
  }

  function deleteTask(taskToDelete: string) {
    const tasksWithoutTheDeletedOne = tasks.filter(
      (task) => task.task != taskToDelete
    );

    setTasks(tasksWithoutTheDeletedOne);
  }

  const isNewTasksEmpty = newTask.length === 0;
  return (
    <div>
      <header className="absolute flex  gap-2 items-center justify-center h-[200px] w-full bg-headerBackground border border-black">
        <RocketIcon />
        <div className="flex">
          <p className="font-bold text-blueLight text-4xl">to</p>
          <p className="font-bold text-purpleLight text-4xl">do</p>
        </div>
      </header>
      <main className="w-full relative top-40 flex flex-col items-center">
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
        <section className="w-[736px] mt-12  flex  justify-between">
          <div className="flex gap-2">
            <p className="text-blueLight font-bold">Tarefas Criadas</p>
            <span className="bg-gray400 text-gray100 p-0.5 rounded-full">
              {amounfOfTasks}
            </span>
          </div>
          <div className="flex gap-2 font-bold items-center">
            <p className="text-purpleDark">Concluídas</p>
            <span className="bg-gray400 text-gray100 p-0.5 rounded-full ">
              {amountOfCompleted}
            </span>
          </div>
        </section>
        <div className="w-[736px] border-t border-opacity-40 border-gray-400 mt-6">
          {tasks.length > 0 ? (
            tasks.map((task) => (
              <div className="w-full">
                <Task
                  handleToggleTask={handleToggleTask}
                  onDeleteTask={deleteTask}
                  task={task}
                />
              </div>
            ))
          ) : (
            <div className="flex flex-col gap-2 items-center justify-center mt-20">
              <FormPlaceholder />
              <p className="text-gray300  font-bold ">
                Você ainda não tem tarefas cadastradas
              </p>
              <p className="text-gray300 text-sm">
                Crie tarefas e organize seus items a fazer
              </p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}

export default App;
