import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Dados SDAB
      </h1>
      <div className="card">
        <a
          className="card"
          href="http://localhost:8080/api/v1/csv/lojas"
          download="lojas.csv" ><button>
          Download - CSV
        </button></a>
      </div>
    </>
  )
}

export default App
