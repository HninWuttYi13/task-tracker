import { useState } from "react";
import closeIcon from "../assets/close.svg";
const Editing = ({ task, updateTask }) => {
  const [editing, setEditing] = useState(false);
  const [editName, setEditName] = useState(task.name);
  const [editAbout, setEditAbout] = useState(task.about);
  const handleSubmit = (e) => {
    e.preventDefault();
    updateTask(task, editName, editAbout);
    setEditing(false);
    setEditName("");
    setEditAbout("");
  };

  return (
    <div>
      <button
        className="bg-blue-100 p-1 cursor-pointer text-gray-500 rounded-sm hover:bg-blue-300"
        onClick={() => setEditing(!editing)}
      >
        Edit
      </button>
      {editing && (
        <div className="fixed inset-0 z-100 flex items-center justify-center">
          <div className="md:w-5/12 sm:w-96 w-80 bg-blue-200 py-5 rounded-md shadow-lg px-3">
            <div className="flex items-center justify-between ">
              <h3 className="font-semibold text-2xl">Edit task</h3>
              <img
                src={closeIcon}
                alt="close-btn"
                className="cursor-pointer w-6 h-6"
                onClick={() => setEditing(false)}
              />
            </div>
            <hr className="w-full border-gray-400 my-5 " />
            <form onSubmit={handleSubmit}>
              <label htmlFor="name" className="uppercase text-lg">
                project name
              </label>
              <input
                type="text"
                className="border-gray-400 h-10 border-[1px] w-full px-2 outline-none focus:border-blue-400 focus:bg-gray-200  focus:border-2 rounded-md my-3 text-lg"
                id="name"
                value={editName}
                onChange={(e) => setEditName(e.target.value)}
              />
              <label htmlFor="task" className="uppercase text-lg">
                task description
              </label>
              <textarea
                id="task"
                className="w-full h-20 border-gray-400 border-[1px] my-2 rounded-md outline-none focus:border-blue-400 focus:bg-gray-200 focus:border-2 py-1 text-lg"
                value={editAbout}
                onChange={(e) => setEditAbout(e.target.value)}
              ></textarea>
              <hr className="w-full border-gray-400 my-5 " />
              <div className="flex justify-end">
                <button
                  className="bg-blue-900 py-2 px-3 text-white rounded-sm shadow-md my-3 uppercase hover:bg-blue-500"
                  type="submit"
                >
                  Update task
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Editing;
