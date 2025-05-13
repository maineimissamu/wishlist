import { Link } from "react-router-dom"
import { useState, useEffect } from "react"

export function Sidebar() {
    const [isOpen, setIsOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
    return (
        <>
            <button className={`md:hidden fixed top-4 ${isOpen ? 'left-[250px]' : 'left-4'} z-50 bg-emerald-600 text-white p-2 rounded-lg shadow`} onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? '✕' : '☰'}
            </button>

            <div className={`fixed top-0 left-0 w-[250px] h-screen bg-gradient-to-b from-emerald-500 to-emerald-700 pt-5 text-white shadow z-40 ${isMobile && !isOpen ? '-translate-x-full' : 'translate-x-0'}`}>
                <div className="p-4 mb-6">
                    <h1 className="text-2xl font-bold text-center">
                        <span className="block text-3xl mb-1">✨</span>
                        Wishlist App
                    </h1>
                    <div className="w-16 h-1 bg-white mx-auto mt-2 rounded opacity-70"></div>
                </div>
                
                <ul className="list-none px-3">
                    <li className="mb-2">
                        <Link to="/" className="flex items-center px-4 py-3 hover:bg-white hover:bg-opacity-20 rounded" onClick={() => isMobile && setIsOpen(false)}>
                            <span className="mr-3 text-xl">🏠</span>
                            <span>Home</span>
                        </Link>
                    </li>
                    <li className="mb-2">
                        <Link to="/about" className="flex items-center px-4 py-3 hover:bg-white hover:bg-opacity-20 rounded" onClick={() => isMobile && setIsOpen(false)}>
                            <span className="mr-3 text-xl">ℹ️</span>
                            <span>About</span>
                        </Link>
                    </li>
                    <li className="mb-2">
                        <Link to="/contact"  className="flex items-center px-4 py-3 hover:bg-white hover:bg-opacity-20 rounded" onClick={() => isMobile && setIsOpen(false)}>
                            <span className="mr-3 text-xl">📞</span>
                            <span>Contact us</span>
                        </Link>
                    </li>
                    
                    <div className="my-4 border-t border-white border-opacity-20 mx-4"></div>

                    <li className="px-4 mt-4">
                        <Link to="/create-wishlist" className="flex items-center justify-center bg-white text-emerald-800 font-bold p-3 rounded shadow hover:bg-opacity-90" onClick={() => isMobile && setIsOpen(false)}>
                            <span className="mr-2 text-xl">✚</span>
                            <span>Create Wishlist</span>
                        </Link>
                    </li>
                </ul>
            </div>
            {isMobile && isOpen && (
                <div 
                    className="fixed inset-0 bg-black bg-opacity-50 z-30"
                    onClick={() => setIsOpen(false)}
                ></div>
            )}
        </>
    )
}