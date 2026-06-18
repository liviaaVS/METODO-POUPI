import { Outlet } from "react-router-dom"
import { Navbar } from "./Navbar"

export function MainLayout() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <Navbar />
      <main className="flex-1 py-8 px-4">
        <div className="container max-w-7xl mx-auto">
          <Outlet />
        </div>
      </main>
      <footer className="border-t py-6 bg-white">
        <div className="container max-w-7xl mx-auto px-4 text-center text-sm text-slate-500">
          <p>Vitrine POUPI &copy; 2026 - Desenvolvido com fins didáticos baseados na metodologia POUPI.</p>
        </div>
      </footer>
    </div>
  )
}
