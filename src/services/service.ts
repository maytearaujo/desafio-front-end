import axios from 'axios';
import Photo from '../models/photo';

const client_id = process.env.NEXT_PUBLIC_CLIENT_ID;;

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});

export const search = async (url: string, setDados: Function) => {
  const response = await api.get(url, {
    params: { client_id },
   });
  setDados(response.data);
};

export const getPhotoById = async (id: string): Promise<Photo | null> => {
  try {
    const response = await api.get(`/photos/${id}`, {
      params: { client_id },
      headers: { 'Cache-Control': 'no-store' },
    });
    return response.data;
  } catch {
    return null;
  }
};