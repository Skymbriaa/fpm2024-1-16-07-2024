import TaskForm from "../TaskForm";
import useTodo from "../../hooks/useTodo";
import Task from "../Task/imdex";


const Todo = () => {
  const { tasks, addTask , setIsDone , deleteTask} = useTodo([
    { id: '1', content: "test task", isDone: false },
  ]);

  const onSubmit = (values, formikBag) => {
    addTask(values);
    formikBag.resetForm();
  };

  const showTasks = (task) => (
    <Task 
    key={task.id} 
    task={task} 
    setIsDone={setIsDone} 
    deleteTask={deleteTask}
    />
  )

  return (
    <section>
      {" "}
      <h2>Todo</h2>
      <TaskForm onSubmit = {onSubmit} />
      <div>
        <h3>task list</h3>
        <ol>
          {tasks.map(showTasks)}
        </ol>
      </div>
    </section>
  );
};

export default Todo;
