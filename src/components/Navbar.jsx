import { Link } from "react-router-dom";
import { Home, Info, Mail, Handshake } from "lucide-react";

const Navbar = () => {
    return (
        <nav className="bg-indigo-600 shadow-md">
            <div className="min-w-4xl max-auto px-1">
                <span className="text-2xl text-amber-200 font-bold">Projeto</span>
            </div>
            <div className="flex space-x-4 items-center">
                <Link to="/" className="flex items-center px-3 py-3 font-medium text-amber-100 hover:text-amber-500" > <Home/> Home</Link>
                <Link to="/sobre" className="flex items-center px-3 py-3 font-medium text-amber-100 hover:text-amber-500" ><Info/> Sobre</Link>
                <Link to="/produtos" className="flex items-center px-3 py-3 font-medium text-amber-100 hover:text-amber-500" ><Handshake/> Produtos</Link>
                <Link to="/contato" className="flex items-center px-3 py-3 font-medium text-amber-100 hover:text-amber-500" ><Mail/> Contato</Link>
            </div>
        </nav>
    )
}

export default Navbar
