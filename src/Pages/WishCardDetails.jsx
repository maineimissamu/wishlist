import { Link, useNavigate, useParams } from "react-router-dom"
import wishes from "../wisheslist.json"

export function WishCardDetails(){

    const navigate = useNavigate();
    const {id} = useParams();

    const allArticles = wishes.flatMap(wish => wish.articles)
    const wish = allArticles.find(item => item.id == id)
    console.log(wish)



   

    return(
        <div className="bloque">
                <p>{wish.name}</p>
                <p>Price: {wish.price} eur.</p>
                <p>Priority: {wish.priority}</p>
                <p>Status: {wish.status}</p>
                <button onClick={()=>navigate(-1)}>Go back</button>
        </div>
    )
}