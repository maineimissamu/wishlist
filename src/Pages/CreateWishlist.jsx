import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createWishlist } from "../services/api";

export function CreateWishlist() {
    const [title, setTitle] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");
    const [success, setSuccess] = useState(false);
    
    const navigate = useNavigate();
    //Creacion de la wishlist
    const handleSubmit = async (e) => {
        e.preventDefault();
        
        if (!title.trim()) {
            setError("El título es obligatorio");
            return;
        }
        
        setIsLoading(true);
        setError("");
        
        try {
            const newWishlist = {
                title: title,
                items: [] 
            };
            
            const createdWishlist = await createWishlist(newWishlist);
            
            setSuccess(true);
            
        } catch (err) {
            setError("Error al crear la wishlist. Inténtalo de nuevo.");
            console.error("Error detallado:", err);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="p-6 max-w-2xl mx-auto">
            <h1 className="text-4xl font-bold text-emerald-600 mb-6">Create New Wishlist</h1>

            {success && (
                <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4">
                    ¡Wishlist creada exitosamente! Redirigiendo...
                </div>
            )}
            
            {error && (
                <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
                    {error}
                </div>
            )}
            

            <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md">
                <div className="mb-4">
                    <label 
                        htmlFor="title" 
                        className="block text-gray-700 text-sm font-bold mb-2"
                    >
                        Título de la Wishlist:
                    </label>
                    <input
                        type="text"
                        id="title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
                        placeholder="Ej: Mi lista de deseos"
                        required
                    />
                </div>
                
                <button 
                    type="submit" 
                    className={`w-full bg-emerald-500 text-white font-bold py-2 px-4 rounded-md hover:bg-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-400 ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
                    disabled={isLoading}
                >
                    {isLoading ? 'Creando...' : 'Crear Wishlist'}
                </button>
                
                <button 
                    type="button" 
                    onClick={() => navigate("/")}
                    className="w-full mt-2 bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded-md hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400"
                >
                    Cancelar
                </button>
            </form>
        </div>
    );
} 