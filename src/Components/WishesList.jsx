import { useParams, useNavigate } from "react-router-dom"
import { WishCard } from "./WishCard";
import { getWishlistById } from "../services/api";
import { useState, useEffect } from "react";

export function WishesList() {
    const {id} = useParams();
    const navigate = useNavigate();
    const [wishes, setWishes] = useState([]);

    useEffect(() => {
        async function loadWishes() {
            try {
                const data = await getWishlistById(id);
                setWishes(data.items);
            } catch (err) {
                console.error(err);
            }
        }
        
        if (id) {
            loadWishes();
        }
    }, [id]);

    if (!id) {
        return <h3>No wishes here</h3>;
    }
    

    return(
        <div className="px-4 py-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
                {wishes.map((wish) => {
                    return(
                        <WishCard key={wish.id} wish={wish}/>
                    )
                })}
                
            </div>
            <div className="w-full flex justify-center mt-6">
                <button 
                    onClick={() => navigate("/")} 
                    className="flex items-center gap-2 bg-white text-green-800 font-bold py-2 px-6 rounded-md shadow-md hover:bg-gray-100 transition-all transform hover:scale-105"
                >
                    See all categories
                </button>
            </div>    
            
        </div>    
    )

}