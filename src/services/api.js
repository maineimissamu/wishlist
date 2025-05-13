import axios from 'axios';

const API_URL = 'http://localhost:3001';

export const getWishlists = async () => {
  try {
    const response = await axios.get(`${API_URL}/wishlists`);
    return response.data;
  } catch (error) {
    console.error("Error al obtener wishlists:", error);
    throw error;
  }
}; 

export const getWishlistById = async (id) => {
  try {
    const response = await axios.get(`${API_URL}/wishlists/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error al obtener wishlist ${id}:`, error);
    throw error;
  }
};

export const createWishlist = async (newWishlist) => {
  try {
    const response = await axios.post(`${API_URL}/wishlists`, newWishlist);
    return response.data;
  } catch (error) {
    console.error("Error al crear wishlist:", error);
    throw error;
  }
}; 

export const deleteWishlist = async (id) => {
  try {
    await axios.delete(`${API_URL}/wishlists/${id}`);
    return { success: true, id };
  } catch (error) {
    console.error(`Error al eliminar wishlist ${id}:`, error);
    throw error;
  }
};

