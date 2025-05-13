import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

import { getWishlists } from "../services/api";
import { WishesCategories } from "../components/WishesCategories";


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


        </div>


    )
}