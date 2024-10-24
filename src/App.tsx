import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [data, setData] = useState<object[]>([]);

  useEffect(() => {
    async function fetchData() {
      const result = await fetch('https://vite-test-api-fqbpcagyazhcbkd7.ukwest-01.azurewebsites.net/api/weatherforecast');

      if (result.ok) {
        const json = await result.json();
        setData(json);
      }
    }
    
    fetchData();
  }, []);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <pre>
          {JSON.stringify(data, null, 2)}
        </pre>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
