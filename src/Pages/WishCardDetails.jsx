import { Link, useNavigate, useParams } from "react-router-dom"
import { getWishlists } from "../services/api";
import { useState, useEffect } from "react";
export function WishCardDetails(){

    const navigate = useNavigate();
    const {id} = useParams();

    const [wish, setWish] = useState([]);

    useEffect(() => {
        const loadWish = async() => {
            try {
                    const data = await getWishlists();
                    console.log(data)
                    const allArticles = data.flatMap(deseo => deseo.items)
                    const wishy = allArticles.find(item => item.id == id)
                    setWish(wishy)
                } catch (err){
                    console.log(err)
                }
        }
        loadWish();
    },[])


    



   

    return(
        <div className="bloque">
            <h3>Product: {wish.name}</h3>
            <p>Description: {wish.description}</p>
            <button onClick={()=>navigate(-1)}>Go back</button>
        </div>
    )
}