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
    
    return (
        <ul>
            {wishes.map((wish) => (
                <WishCard key={wish.id} wish={wish} />
            ))}
            <button 
                onClick={() => navigate("/")}
            >
                See all categories
            </button>
        </ul>
    );
}