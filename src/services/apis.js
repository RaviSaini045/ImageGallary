const SERVER_URL = `${import.meta.env.VITE_SERVER_URL}`;

const GALLERY_URL = SERVER_URL + "/api/images";

export const FETCH_IMAGES = GALLERY_URL + "/fetchImages";
export const UPLOAD_IMAGE = GALLERY_URL + "/uploadImage";
export const DELETE_IMAGE = GALLERY_URL + "/deleteImage";
export const SEARCH_IMAGES= GALLERY_URL +"/searchImages";