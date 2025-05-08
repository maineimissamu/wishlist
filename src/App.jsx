import { Routes, Route } from "react-router-dom"

import { Sidebar } from "./Components/Sidebar"
import { Home } from "./Pages/Home"
import { About } from "./Pages/About"
import { Contact } from "./Pages/Contact"
import { WishesList } from "./Components/WishesList"
import { WishCardDetails } from "./Pages/WishCardDetails"
import { CreateWishlist } from "./Pages/CreateWishlist"


function App() {

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />
      
      <div className="ml-[250px] flex-1 p-6">
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/about" element={<About/>}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/create-wishlist" element={<CreateWishlist />}></Route>

          <Route path="/wisheslist/:id" element={<WishesList/>}></Route>
          <Route path="/wisheslist/:id/wish/:id" element={<WishCardDetails/>}></Route>
        </Routes>
      </div>
    </div>
  )
}

export default App
