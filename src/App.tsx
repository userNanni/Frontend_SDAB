import './App.css'
import { Header } from './components/header'
import { Outlet, Route, Routes } from 'react-router'
import Home from './routes/Home'
import Dados from './routes/Dados'
import Facilidades from './routes/Facilidades'

function App() {

  return (
    <div className="w-full h-full flex flex-col items-center justify-start bg-background text-foreground">
      <Header/>
      <Outlet/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Dados" element={<Dados />} />
        <Route path="/Facilidades" element={<Facilidades />} />
      </Routes>
    </div>
  )
}

export default App
