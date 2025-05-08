import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

import { getWishlists } from "../services/api";
import { WishesCategories } from "../Components/WishesCategories";


export function Home() {
    
    const [wishlists, setWishlists] = useState([]);

    useEffect(() => {
        const loadWishlists = async () => {

            try {
                const data = await getWishlists();
                console.log(data)
                setWishlists(data)
            } catch (err){
                console.log(err)
            }
        }
        loadWishlists();
    }, []);

    

    return(
        <div >
           
            <WishesCategories wishlists = {wishlists}/>

            <button>Add Wishlist</button>
            <form>
                <input
                    type="text"
                    placeholder="Nombre"
                    value=""
                />
                <button type="submit">Add</button>
            </form>

        </div>


    )
}