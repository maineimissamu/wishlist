import { useParams } from "react-router-dom"
import { WishCard } from "./WishCard";
import { useNavigate } from "react-router-dom";
import { getWishlistById } from "../services/api";
import { useState, useEffect } from "react";

export function WishesList () {

    const {id} = useParams();

    const [wishes, setWishes] = useState([]);

    useEffect (() => {
        const loadWishes = async() => {
            try {
                    const data = await getWishlistById(id);
                    console.log(data)
                    setWishes(data.items)
                } catch (err){
                    console.log(err)
                }
        }
        loadWishes();
        
    }, [])

    
    const navigate = useNavigate()

    const goTo = () => {
        navigate("/")
    }
    


    if(!id){
        return <h3>No wishes here</h3>
    }
    
        return(
            <div className="px-4 py-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
                {wishes.map((wish) => {
                    return(
                        <WishCard wish={wish}/>
                    )
                })}
                
            </div>
            <div className="w-full flex justify-center mt-6">
            <button onClick={goTo} className="flex items-center gap-2 bg-white text-green-800 font-bold py-2 px-6 rounded-md shadow-md hover:bg-gray-100 transition-all transform hover:scale-105">See all categories</button>
            </div>    
            
            </div>    
        )

    
    
}