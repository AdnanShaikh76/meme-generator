import Home from "./pages/Home"
import { Routes, Route } from "react-router"
import Edit from "./pages/Edit"


function App() {
  

  return (
    <>
    <h1>Meme Generator</h1>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/edit" element={<Edit />}/>
      </Routes>
    </>
  )
}

export default App
