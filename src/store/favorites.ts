import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type FavoriteStore = {
  favorites: string[];
  toggleFavorite: (photoId: string) => void;
  isFavorite: (photoId: string) => boolean;
};

export const useFavoriteStore = create<FavoriteStore>()(
  persist(
    (set, get) => ({
      favorites: [],
      toggleFavorite: (photoId: string) => {
        set(state => ({
          favorites: state.favorites.includes(photoId)
            ? state.favorites.filter(id => id !== photoId)
            : [...state.favorites, photoId]
        }));
      },
      isFavorite: (photoId: string) => get().favorites.includes(photoId),
    }),
    {
      name: 'favorite-photos', 
    }
  )
);