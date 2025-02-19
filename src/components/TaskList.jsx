import { useEffect, useState } from "react";
import Timer from "./Timer";
import Editing from "./Editing";

// eslint-disable-next-line react/prop-types
const TaskList = ({ task, deleteEachTask, updateTask }) => {
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    let interval;
    if (running) {
      interval = setInterval(() => {
        setTime((prev) => prev + 10);
      }, 10);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [running]);
  return (
    <div>
      <li className="p-3 bg-white rounded-md shadow">
        {/* taskName and edit button */}
        <div className="flex items-start justify-between">
          <div>
            <h1 className="text-xl font-semibold capitalize leading-15">
              project name:{task.name}
            </h1>
            <h2 className="text-lg text-gray-700 capitalize">
              task description:{task.about}
            </h2>
          </div>
          <Editing task={task} updateTask={updateTask} />
        </div>
        <hr className="border-gray-300 my-2" />
        {/* timer */}
        <Timer
          time={time}
          setTime={setTime}
          setRunning={setRunning}
          running={running}
        />
        <hr className="border-gray-300 my-2" />
        <div className="flex justify-end text-white">
          {/* delete button */}
          <button
            type="button"
            className="bg-red-600 px-3 sm:py-2 py-1 rounded-md hover:bg-red-400"
            onClick={() => deleteEachTask(task)}
          >
            Delete
          </button>
        </div>
      </li>
    </div>
  );
};

export default TaskList;
