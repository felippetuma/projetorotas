import { BrowserRouter as Router, Routes, Route } from "react-router-dom" 
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import Sobre from "./pages/Sobre"
import Contato from "./pages/Contato"
import Produtos from "./pages/Produtos"

function App() {
  return (
    <Router>
      <div>
        <Navbar/>
        <main>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/sobre" element={<Sobre/>}/>
            <Route path="/produtos" element={<Produtos/>}/>
            <Route path="/contatos" element={<Contato/>}/>
          </Routes>
        </main>
      </div>
    </Router>
  )
}

export default App
