import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createWishlist } from "../services/api";

export function AddWishes() {
    const [title, setTitle] = useState("");
    const [imageUrl, setImageUrl] = useState("");

    const [description, setDescription] = useState("");
    const [status, setStatus] = useState("");
    const [price, setPrice] = useState("");
    const [priority, setPriority] = useState("")

    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");
    const [success, setSuccess] = useState(false);
    

    console.log(description)


    const navigate = useNavigate();
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        
        if (!title.trim()) {
            setError("El título es obligatorio");
            return;
        }
        
        setIsLoading(true);
        setError("");
        
        try {
            await createWishlist({
                title: title,
                image: imageUrl.trim() || null,
                description: description,
                status: status,
                price: price,
                priority: priority
            });
            
            setSuccess(true);
            setTimeout(() => navigate("/"), 1000);
            
        } catch (err) {
            setError("Error al añadir producto. Inténtalo de nuevo.");
            console.error(err);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="p-6 max-w-2xl mx-auto">
            <h1 className="text-3xl font-bold text-emerald-600 mb-6">New Product</h1>

            {success && (
                <div className="bg-green-100 border border-green-400 text-green-700 p-3 rounded mb-4">
                    Adding your new wish!...
                </div>
            )}
            
            {error && (
                <div className="bg-red-100 border border-red-400 text-red-700 p-3 rounded mb-4">
                    {error}
                </div>
            )}

            <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow">
                <div className="mb-4">
                    <label 
                        htmlFor="title" 
                        className="block text-gray-700 font-bold mb-2"
                    >
                        Product Name:
                    </label>
                    <input
                        type="text"
                        id="title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-emerald-500"
                        placeholder="Ej: Mi lista de deseos"
                        required
                    />
                </div>

                <div className="mb-4">
                    <label 
                        htmlFor="imageUrl" 
                        className="block text-gray-700 font-bold mb-2"
                    >
                        Image's URL (optional):
                    </label>
                    <input
                        type="url"
                        id="imageUrl"
                        value={imageUrl}
                        onChange={(e) => setImageUrl(e.target.value)}
                        className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-emerald-500"
                        placeholder="https://ejemplo.com/imagen.jpg"
                    />
                </div>

                <div className="mb-4">
                    <label 
                        htmlFor="description" 
                        className="block text-gray-700 font-bold mb-2"
                    >
                        Description:
                    </label>
                    <input
                        type="text"
                        id="description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-emerald-500"
                        placeholder="Ej: This amazing book..."
                        required
                    />
                </div>

                <div className="mb-4">
                    <label 
                        htmlFor="price" 
                        className="block text-gray-700 font-bold mb-2"
                    >
                        Price:
                    </label>
                    <input
                        type="number"
                        id="price"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                        className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-emerald-500"
                        required
                    />
                </div>

                <div className="mb-4">
                    <label 
                        htmlFor="status" 
                        className="block text-gray-700 font-bold mb-2"
                    >
                        Status:
                    </label>
                    <select
                        value={status}
                        onChange={(e) => setStatus(e.target.value)}
                        className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-emerald-500"
                        required
                    >
                        <option value="Available">Available</option>
                        <option value="To Order">To Order</option>
                    </select>    
                </div>

                <div className="mb-4">
                    <label 
                        htmlFor="priority" 
                        className="block text-gray-700 font-bold mb-2"
                    >
                        Priority:
                    </label>
                    <select
                        value={priority}
                        onChange={(e) => setPriority(e.target.value)}
                        className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-emerald-500"
                        required
                    >
                        <option value="High">High</option>
                        <option value="Medium">Medium</option>
                        <option value="Low">Low</option>
                    </select>    
                </div>
                
                <button 
                    type="submit" 
                    className={`w-full bg-emerald-500 text-white font-bold py-2 px-4 rounded hover:bg-emerald-600 ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
                    disabled={isLoading}
                >
                    {isLoading ? 'Adding...' : 'Add to wishlist'}
                </button>
                
                <button 
                    type="button" 
                    onClick={() => navigate("/")}
                    className="w-full mt-2 bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded hover:bg-gray-400"
                >
                    Cancel
                </button>
            </form>
        </div>
    );
} 