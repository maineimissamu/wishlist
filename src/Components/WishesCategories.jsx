import { Link } from "react-router-dom";

export function WishesCategories ({wishlists}) {

    console.log(wishlists)

    return(
        <div>
        {wishlists.map((categories)=>{
            return(
                <div key={categories.id} className="bloque">
                <Link to={`/wisheslist/${categories.id}`} className="bloque-link">
                    <h2>{categories.title}</h2>
                </Link>
                </div>
            )
        })}
    </div>
    )
}