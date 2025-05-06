import { Link } from "react-router-dom";
import { useState } from "react";
import wishLists from "../wisheslist.json"
import { WishesCategories } from "../Components/WishesCategories";
export function Home() {





    
    return(
        <div >
           
            <WishesCategories wishLists = {wishLists}/>

            <button>Add Wishlist</button>
            <form>
                <input
                    type="text"
                    placeholder="Nombre"
                    value=""
                />
                <button type="submit">Add</button>
            </form>

        </div>


    )
}