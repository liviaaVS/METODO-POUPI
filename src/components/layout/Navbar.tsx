import { Link } from "react-router-dom"
import { BarChart2, Home, ClipboardList, PlayCircle } from "lucide-react"

export function Navbar() {
  return (
    <nav className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
      <div className="container flex h-16 items-center justify-between px-4 max-w-7xl mx-auto">
        <Link to="/" className="flex items-center gap-2 font-bold text-xl">
          <BarChart2 className="h-6 w-6 text-primary" />
          <span>Vitrine POUPI</span>
        </Link>
        <div className="flex gap-6">
          <Link to="/" className="flex items-center gap-1 text-sm font-medium hover:text-primary transition-colors">
            <Home className="h-4 w-4" />
            <span className="hidden sm:inline">Início</span>
          </Link>
          <Link to="/diagnostico" className="flex items-center gap-1 text-sm font-medium hover:text-primary transition-colors">
            <ClipboardList className="h-4 w-4" />
            <span className="hidden sm:inline">Diagnóstico</span>
          </Link>
          <Link to="/demonstracoes" className="flex items-center gap-1 text-sm font-medium hover:text-primary transition-colors">
            <PlayCircle className="h-4 w-4" />
            <span className="hidden sm:inline">Demos</span>
          </Link>
        </div>
      </div>
    </nav>
  )
}
