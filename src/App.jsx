import AddTask from "./components/Addtask";

function App() {
  return (
    <div className="p-5">
      <h1 className="text-3xl font-bold py-4">03- The Task Tracker</h1>
      <p className="text-xl py-2">Hi there!</p>
      <p className="text-xl py-2">Click the button below to add a new task:</p>
      
      {/* Center the AddTask button */}
      <div className="flex justify-start">
        <AddTask />
      </div>
    </div>
  );
}

export default App;
