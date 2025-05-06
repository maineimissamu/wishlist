import { Link } from "react-router-dom";

export function WishesCategories ({wishLists}) {
    

    console.log(wishLists)
    


    return(
        <div>
        {wishLists.map((categories)=>{
            return(
                <div key={categories.id} className="bloque">
                <Link to={`/wisheslist/${categories.id}`} className="bloque-link">
                    <h2>{categories.name}</h2>
                </Link>
                </div>
            )
        })}
    </div>
    )
}