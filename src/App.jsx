import { Routes, Route } from "react-router-dom"

import { Sidebar } from "./Components/Sidebar"
import { Home } from "./Pages/Home"
import { About } from "./Pages/About"
import { Contact } from "./Pages/Contact"
import { WishesList } from "./Components/WishesList"
import { WishCard } from "./Components/WishCard"
import { WishCardDetails } from "./Pages/WishCardDetails"

function App() {

  return (
    <div className="container">
      <Sidebar />

      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/contact" element={<Contact />}></Route>

        <Route path="/wisheslist/:id" element={<WishesList/>}></Route>
        <Route path="/wisheslist/:id/wish/:id" element={<WishCardDetails/>}></Route>

      </Routes>
    </div>
  )
}

export default App
