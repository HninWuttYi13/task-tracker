import { useState } from "react";

// eslint-disable-next-line react/prop-types
const InputTask = ({tasks, setTasks}) => {
  const [name, setName] = useState("");
  const [about, setAbout] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim() || !about.trim()) return;
    const addedTask = [...tasks, { name, about }]
    setTasks(addedTask);
   localStorage.setItem("tasks", JSON.stringify(addedTask))
    setName("");
    setAbout("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name" className="uppercase text-lg">
        project name
      </label>
      <input
        type="text"
        className="border-gray-400 h-10 border-[1px] w-full px-2 outline-none focus:border-blue-400 focus:bg-gray-200  focus:border-2 rounded-md my-3 text-lg"
        id="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <label htmlFor="task" className="uppercase text-lg">
        task description
      </label>
      <textarea
        id="task"
        className="w-full h-20 border-gray-400 border-[1px] my-2 rounded-md outline-none focus:border-blue-400 focus:bg-gray-200 focus:border-2 py-1 text-lg"
        value={about}
        onChange={(e) => setAbout(e.target.value)}
      ></textarea>
      <hr className="w-full border-gray-400 my-5 " />
      <div className="flex justify-end">
        <button className="bg-blue-900 py-2 px-3 text-white rounded-sm shadow-md my-3 uppercase hover:bg-blue-500" type="submit">
         Add task
        </button>
      </div>
    </form>
  );
};

export default InputTask;
