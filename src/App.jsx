import { Routes, Route } from "react-router-dom"
import { useState, useEffect } from "react"

import { Sidebar } from "./components/Sidebar"
import { Home } from "./pages/Home"
import { About } from "./pages/About"
import { Contact } from "./pages/Contact"
import { WishesList } from "./components/WishesList"
import { WishCardDetails } from "./pages/WishCardDetails"
import { CreateWishlist } from "./pages/CreateWishlist"

function App() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    window.addEventListener('resize', () => {
      setIsMobile(window.innerWidth < 768);
    });
  }, []);

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />
      
      <div className={`flex-1 p-6 transition-all duration-300 ${isMobile ? 'ml-0' : 'ml-[250px]'}`}>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/create-wishlist" element={<CreateWishlist />} />
          <Route path="/wisheslist/:id" element={<WishesList/>} />
          <Route path="/wisheslist/:id/wish/:id" element={<WishCardDetails/>} />
        </Routes>
      </div>
    </div>
  )
}

export default App
