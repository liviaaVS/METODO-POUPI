import { HashRouter, Routes, Route } from "react-router-dom"
import { MainLayout } from "./components/layout/MainLayout"
import Home from "./pages/Home"
import Diagnostic from "./pages/Diagnostic"
import Results from "./pages/Results"
import Demos from "./pages/Demos"

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="diagnostico" element={<Diagnostic />} />
          <Route path="resultado" element={<Results />} />
          <Route path="demonstracoes" element={<Demos />} />
        </Route>
      </Routes>
    </HashRouter>
  )
}

export default App
