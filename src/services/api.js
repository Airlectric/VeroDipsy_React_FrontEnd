import axios from 'axios';

const API_URL = 'https://verosiake.pythonanywhere.com/api';


export const getProducts = () => axios.get(`${API_URL}/products/`);
export const getLookbookImages = () => axios.get(`${API_URL}/lookbook-images/`);
export const getAboutUsContent = () => axios.get(`${API_URL}/about-us/`);

export const addProduct = (product) => axios.post(`${API_URL}/products/`, product);
export const updateProduct = (id, product) => axios.put(`${API_URL}/products/${id}/`, product);
export const deleteProduct = (id) => axios.delete(`${API_URL}/products/${id}/`);

export const addLookbookImage = (image) => axios.post(`${API_URL}/lookbook-images/`, image);
export const updateLookbookImage = (id, image) => axios.put(`${API_URL}/lookbook-images/${id}/`, image);
export const deleteLookbookImage = (id) => axios.delete(`${API_URL}/lookbook-images/${id}/`);

export const addAboutUsContent = (content) => axios.post(`${API_URL}/about-us/`, content);
export const updateAboutUsContent = (id, content) => axios.put(`${API_URL}/about-us/${id}/`, content);
export const deleteAboutUsContent = (id) => axios.delete(`${API_URL}/about-us/${id}/`);

export const getHeroContent = () => axios.get(`${API_URL}/hero/`);
export const getHeroContentById = (id) => axios.get(`${API_URL}/hero/${id}/`);
export const createHeroContent = (data) => axios.post(`${API_URL}/hero/`, data);
export const updateHeroContent = (id, data) => axios.put(`${API_URL}/hero/${id}/`, data);
export const deleteHeroContent = (id) => axios.delete(`${API_URL}/hero/${id}/`);