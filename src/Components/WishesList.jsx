import { useParams } from "react-router-dom"
import wishesData from "../wisheslist.json" 
import { WishCard } from "./WishCard";
import { useNavigate } from "react-router-dom";

export function WishesList () {

    const {id} = useParams();
    const navigate = useNavigate()

    const wishLists = wishesData.find((item) => item.id == (id))
    const allWishes = wishLists.articles

    const goTo = () => {
        navigate("/")
    }
    


    if(!id){
        return <h3>No wishes here</h3>
    }
    
        return(
            <ul>
                {allWishes.map((wish) => {
                    return(
                        <WishCard wish={wish}/>
                    )
                })}
                <button onClick={goTo}>See all categories</button>
            </ul>
        )
    
    
}