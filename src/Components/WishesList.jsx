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
            <ul>
                {wishes.map((wish) => {
                    return(
                        <WishCard wish={wish}/>
                    )
                })}
                <button onClick={goTo}>See all categories</button>
            </ul>
        )
    
    
}