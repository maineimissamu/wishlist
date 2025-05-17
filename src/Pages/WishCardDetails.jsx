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
        <div>
        <div className="flex flex-col lg:flex-row w-full max-w-6xl mx-auto p-4 sm:p-6 gap-8 bg-white shadow-[0_10px_30px_rgba(0,0,0,0.5)] border border-gray-200 rounded-2xl bg-gradient-to-b from-emerald-600 to-emerald-200">
            <div className="flex-1 flex flex-col gap-6 ">
            
                <div className="flex flex-col lg:flex-row gap-6 ">
                    <div className="flex-1 " >
                        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-10 mt-4 p-4 text-center  text-white rounded-lg">{wish.title}</h1>
                        <p className="text-base sm:text-lg mb-4 bg-white border rounded-lg p-1">Description: {wish.description}</p>
                        <p className="text-base sm:text-lg mb-4 bg-white border rounded-lg p-1">Status:</p>
                        <p className="text-base sm:text-lg mb-4 bg-white border rounded-lg p-1">Status:</p>
                        <p className="text-base sm:text-lg mb-4 bg-white border rounded-lg p-1">Status:</p>
                    </div>

                    <div className="flex-none w-full lg:w-1/2 h-64 sm:h-80 md:h-96 rounded-[20px] md:rounded-[20px] border border-gray-400 shadow-md bg-cover bg-center min-w-0" role="img"
                        style={{ backgroundImage: "url(https://img.freepik.com/foto-gratis/arreglo-coleccion-estacionaria-moderna_23-2149309643.jpg?semt=ais_hybrid&w=740)" }}>    
                    </div>
                    
                </div>
            </div>
        
        </div>

            <div className="flex flex-col sm:flex-row justify-center  gap-4">
            <button onClick={()=>navigate(-1)} className="flex items-center gap-2 bg-white text-green-800 font-bold py-2 px-4 rounded-md shadow-md hover:bg-gray-100 transition-all transform hover:scale-105 mt-6">Go back</button>
                    
            <button onClick={()=>navigate(-1)} className="flex items-center gap-2 bg-red-600 text-white font-bold py-2 px-4 rounded-md shadow-md hover:bg-red-300 transition-all transform hover:scale-105 mt-6">Buy it now!</button>
            </div>
        </div>
    )
}