import axios from 'axios';
import Photo from '../models/photo';

const client_id = process.env.NEXT_PUBLIC_CLIENT_ID;;

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});

export const getPhotos = async (url: string) => {
  const response = await api.get(url, {
    params: { client_id },
  });
  return response.data;
};