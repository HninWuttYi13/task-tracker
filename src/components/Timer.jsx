const Timer = ({time, setRunning, running, setTime}) => {
  return (
    <div className="flex items-center  justify-around text-lg bg-blue-100 py-2 rounded-md shadow-md">
          <div className="font-bold">
          <span>
            {String(Math.floor((time / 60000) % 60)).padStart(2, "0")}:
          </span>
          <span>
            {String(Math.floor((time / 1000) % 60)).padStart(2, "0")}:
          </span>
          <span>{String(Math.floor((time % 1000) / 10)).padStart(2, "0")}</span>
          </div>
          <div className="flex items-center gap-3">
            <button onClick={()=>setRunning(!running)} className="bg-blue-300 px-2 text-black rounded-sm cursor-pointer hover:bg-blue-500">{running ? 'stop' : 'start'}</button>
            <button onClick={()=> {setTime(0); setRunning(false)}} className="bg-amber-300 px-2 rounded-sm cursor-pointer hover:bg-amber-500">reset</button>
          </div>
        </div>
  )
}

export default Timer