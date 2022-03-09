import React from 'react';
import './App.css';
import { getAvailablePrinter, printLabels } from './printeLabels';
import { useWorker } from "@koale/useworker"
import WorkerBuilder from './worker-builder'
//@ts-ignore
import TestWorker from './testWorker'

const instance = new WorkerBuilder(TestWorker)

function App() {

  // const [workerFn, { status: sortWorkerStatus, kill: killWorker }] = useWorker(TestWorker)

  
  const getPrinters = async () => {
    const printer = await getAvailablePrinter()
    console.log('printer--Main', printer)
    if (printer) {
      printLabels(printer, '876543')
    }
    // const printer = await workerFn()
    // console.log(printer)
    // console.log(sortWorkerStatus)
    // instance.postMessage('dymo')
    // instance.onmessage = (message) => {
    //   if (message) {
    //     console.log('Message from worker: ', message.data)
    //   }
    // }
  }
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <button
          style={{ width: '200px', height: '48px', cursor: 'pointer', backgroundColor: 'black', border: 'none', color: 'white', borderRadius: 4 }}
          onClick={getPrinters}
        >Generate Label</button>
      </header>
    </div>
  );
}

export default App;
