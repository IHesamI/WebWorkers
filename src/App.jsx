import { useMemo } from "react";
import "./App.css";
import Worker from "./workers/MyWorker";
import WorkerBuilder from "./workers/WorkerCreator";
import { useRef } from "react";
function App() {
  // const worker = useMemo(() => {
  //   return new WorkerBuilder(Worker);
  // }, []);
  const worker = useRef(new WorkerBuilder(Worker));
  let interval;
  function handleStart(e) {
    worker.current.postMessage({ type: "start", interval });
  }
  function handleStop() {
    clearInterval(interval);
    worker.current.postMessage({ type: "stop", interval });
  }
  return (
    <>
      <div>
        <button onClick={handleStart}>start</button>
        <button onClick={handleStop}>Stop</button>
      </div>
    </>
  );
}

export default App;
