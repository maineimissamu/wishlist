import { Link } from "react-router-dom"

export function Sidebar () {
    return (
        <div className="fixed top-0 left-0 w-[250px] h-screen bg-gradient-to-b from-emerald-500 to-emerald-700 pt-5 text-white shadow-lg">
            <div className="px-6 py-4 mb-6">
                <h1 className="text-2xl font-bold text-white text-center">
                    <span className="block text-3xl mb-1">✨</span>
                    Wishlist App
                </h1>
                <div className="w-16 h-1 bg-white mx-auto mt-2 rounded-full opacity-70"></div>
            </div>
            
            <ul className="list-none p-0 px-3">
                <li className="mb-2 rounded-lg overflow-hidden">
                    <Link to="/" className="flex items-center text-white no-underline px-4 py-3 transition-colors hover:bg-white hover:bg-opacity-20 rounded-lg">
                        <span className="mr-3 text-xl">🏠</span>
                        <span className="font-medium">Home</span>
                    </Link>
                </li>
                <li className="mb-2 rounded-lg overflow-hidden">
                    <Link to="/about" className="flex items-center text-white no-underline px-4 py-3 transition-colors hover:bg-white hover:bg-opacity-20 rounded-lg">
                        <span className="mr-3 text-xl">ℹ️</span>
                        <span className="font-medium">About</span>
                    </Link>
                </li>
                <li className="mb-2 rounded-lg overflow-hidden">
                    <Link to="/contact" className="flex items-center text-white no-underline px-4 py-3 transition-colors hover:bg-white hover:bg-opacity-20 rounded-lg">
                        <span className="mr-3 text-xl">📞</span>
                        <span className="font-medium">Contact us</span>
                    </Link>
                </li>
                
                <div className="my-4 border-t border-white border-opacity-20 mx-4"></div>

                <li className="px-4 mt-4">
                    <Link to="/create-wishlist" className="flex items-center justify-center text-emerald-800 font-bold no-underline px-4 py-3 bg-white rounded-lg shadow-md hover:bg-opacity-90 transition-all transform hover:scale-105">
                        <span className="mr-2 text-xl">✚</span>
                        Create Wishlist
                    </Link>
                </li>
            </ul>
            
        </div>
    )
}