import { useEffect, useState } from "react";
import Title from "./title";
import InputTask from "./InputTask";
import TaskList from "./TaskList";

const AddTask = () => {
  const [Modal, setModal] = useState(false);
  const [tasks, setTasks] = useState([]);

  // Load tasks from local storage on mount
  useEffect(() => {
    try {
      const storedTasks = localStorage.getItem("tasks");
      const parsedTasks = storedTasks ? JSON.parse(storedTasks) : []; 
      setTasks(parsedTasks);
    } catch (error) {
      console.error("Error parsing tasks from localStorage:", error);
      setTasks([]); 
    }
  }, []);

  // Function to update a task
  const updateTask = (taskToUpdate, newName, newAbout) => {
    setTasks((prevTasks) => {
      const updatedTasks = prevTasks.map((task) =>
        task === taskToUpdate ? { ...task, name: newName, about: newAbout } : task
      );
      localStorage.setItem("tasks", JSON.stringify(updatedTasks)); 
    });
  };

  // Function to delete a task
  const deleteEachTask = (taskDeleted) => {
    setTasks((prevTasks) => {
      const updatedTasks = prevTasks.filter((task) => task !== taskDeleted);
      localStorage.setItem("tasks", JSON.stringify(updatedTasks)); 
      return updatedTasks;
    });
  };

  return (
    <div className="flex flex-col md:items-start w-full">
      {/* Button to open modal */}
      <div className="flex items-start">
        <button
          className="bg-blue-900 mx-1 px-3 py-2 cursor-pointer rounded-sm text-white hover:bg-blue-500"
          type="button"
          onClick={() => setModal(!Modal)}
        >
          + New Task
        </button>
      </div>

      {/* Task input modal */}
      {Modal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-transparent">
          <div className="md:w-5/12 sm:w-96 w-80 bg-blue-200 py-5 rounded-md shadow-lg px-3">
            <Title Modal={Modal} setModal={setModal} />
            <hr className="w-full border-gray-400 my-5" />
            <InputTask tasks={tasks} setTasks={setTasks} />
          </div>
        </div>
      )}

      {/* Task List Section */}
      <div className="mt-10 sm:w-full w-full p-5 rounded-md">
        <h2 className="text-xl font-semibold mb-3">Task List</h2>
        <ul className="space-y-4 sm:grid grid-cols-2 md:gap-10 sm:gap-5">
          {tasks.length === 0 ? (
            <p className="text-gray-500">No tasks added yet.</p>
          ) : (
            tasks.map((task, index) => (
              <TaskList key={index} task={task} deleteEachTask={deleteEachTask} updateTask={updateTask} />
            ))
          )}
        </ul>
      </div>
    </div>
  );
};

export default AddTask;
