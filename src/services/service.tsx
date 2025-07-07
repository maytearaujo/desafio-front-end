import axios from 'axios';

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});

export const search = async (url: string, setDados: Function) => {
    const response = await api.get(url)
    setDados(response.data);
}
