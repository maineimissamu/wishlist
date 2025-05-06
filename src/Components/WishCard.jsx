import { Link } from "react-router-dom"
import { useParams } from "react-router-dom"

export function WishCard ({wish}) {

const {id} = useParams()

    

    return(
       
            <div className="bloque">
            <li key={wish.id}>
                <Link to={`/wisheslist/${id}/wish/${wish.id}`} className="bloque-link">
                <p>{wish.name}</p>
                <p>Status: {wish.status}</p>
                </Link>
            </li>
            </div>
      
       
    )
}