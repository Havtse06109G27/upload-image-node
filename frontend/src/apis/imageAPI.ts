import FormData from 'form-data'
import http from './http'

export const getImages = () => {
    return http.get('/images');
}

export const uploadImages = (image: File) => {
    const data = new FormData();
    data.append('image', image);
    return http.post('/upload', data, {
        headers: { 'Content-Type': 'multipart/form-data;' }
    })
}