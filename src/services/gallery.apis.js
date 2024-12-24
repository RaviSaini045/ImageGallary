import { apiConnector } from "./apiConnector"
import { DELETE_IMAGE, FETCH_IMAGES, SEARCH_IMAGES, UPLOAD_IMAGE } from "./apis"

export const fetchImages = async() => {
    try {
        const response = await apiConnector("GET", FETCH_IMAGES);
        if(response.status > 200) {
            throw new Error(response.data.message);
        }
        return response.data.data;   
    } catch (error) {
        console.error(error.message);
        return [];
    }
};

export const uploadImage = async (formData,navigate) => {
    try {
        const response = await apiConnector("POST", UPLOAD_IMAGE, formData);
        if(response.status > 200) {
            throw new Error(response.data.message);
        }
        navigate("/");
    } catch (error) {
        console.error(error.message);
        return;
    }
};

export const deleteImage = async(id,navigate) => {
    try {
        const response = await apiConnector("DELETE", `${DELETE_IMAGE}/${id}`);
        if(response.status > 200) {
            throw new Error(response.data.message);
        }
        navigate("/");
    } catch (error) {
        console.error(error.message);
        return;
    }
};

export const searchImages = async (query, filters) => {
    try {
        const response = await apiConnector("GET", SEARCH_IMAGES, null, null, {
          q: `${query}`,
          ...filters
        });        
        return response.data.data.hits;
    } catch (error) {
        console.error(error.message);
        return [];
    }
}