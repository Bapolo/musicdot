import { HashRouter, Routes, Route } from "react-router-dom"
import React, { Suspense } from "react"

const Sobre = React.lazy(() => import("./pages/Sobre.jsx"))
const Home = React.lazy(() => import("./pages/Home.jsx"))

function App() {

  return (
     <HashRouter>
      <Suspense fallback={<div>Carregando...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre" element={<Sobre />} />
        </Routes>
      </Suspense>
     </HashRouter>
  )
}

export default App
