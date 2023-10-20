import React from "react"
import { Route,Routes } from "react-router-dom"
import Home from "./pages/Home"
import CreateBooks from "./pages/CreateBooks"
import DeleteBook from "./pages/DeleteBook"

const App= ()=> {
  return (
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/books/newbook" element={<CreateBooks/>} />
        <Route path="/books/:id" element={<DeleteBook/>} />
      </Routes>
  )
}

export default App
