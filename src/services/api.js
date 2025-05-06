import axios from 'axios';

export const getWishlists = async () => {
  try {
    const response = await axios.get('http://localhost:3001/wishlists');
    return response.data;
  } catch (error) {
    console.error("Error al obtener wishlists:", error);
    throw error;
  }
}; 

export const getWishlistById = async (id) => {
  try {
    const response = await axios.get(`http://localhost:3001/wishlists/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error al obtener wishlist ${id}:`, error);
    throw error;
  }
};



/* 
   const newWishlish = {
   title: "Mi primera wishlist",
   items: []
 };
*/

export const createWishlist = async (newWishlist) => {
  try {
    const response = await axios.post('http://localhost:3001/wishlists', newWishlist);
    return response.data;
  } catch (error) {
    console.error("Error al crear wishlist:", error);
    throw error;
  }
}; 

export const deleteWishlist = async (id) => {
  try {
    await axios.delete(`http://localhost:3001/wishlists/${id}`);
    return { success: true, id };
  } catch (error) {
    console.error(`Error al eliminar wishlist ${id}:`, error);
    throw error;
  }
};

