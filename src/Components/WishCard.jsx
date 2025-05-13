import { Link, useParams } from "react-router-dom"

export function WishCard({wish}) {
    const {id} = useParams();


const {id} = useParams()

    

    return(
        <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg rounded-3xl overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.5)] border border-gray-200 bg-white ">
            <div className="relative h-40 w-full bg-cover bg-center"
                 style={{backgroundImage: "url('https://img.freepik.com/foto-gratis/arreglo-coleccion-estacionaria-moderna_23-2149309643.jpg?semt=ais_hybrid&w=740')"}}>
            </div>

            <div className="h-0.5 w-full bg-black"/>
            <div key={wish.id} className="h-3/4 bg-gradient-to-b from-emerald-600 to-emerald-200 p-4 text-center text-sm  text-white ">
            
                <Link to={`/wisheslist/${id}/wish/${wish.id}`} className="block space-y-2">
                <h3 className="font-semibold text-2xl md:text-3xl break-words text-balance ">{wish.name}</h3>
                
                <p className="text-black text-base">{wish.description}</p>
                <p className="text-black text-base font-medium">Status: {wish.status}</p>
                
                </Link>
            
            </div>
                
        </div>
           
      
       

    )
}