'use client'

import { useEffect, useState } from 'react';
import { getPhotos } from '../../services/service';
import Photo from '../../models/photo';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import PhotoModal from '@/components/PhotoModal';
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import { useFavoriteStore } from '@/store/favorites';

import dynamic from 'next/dynamic'
const CardPhoto = dynamic(
  () => import('../../components/cardPhoto'),
  {
    loading: () => <p>Carregando Imagens...</p>,
  }
)

export default function PhotoGallery() {
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(false);
  const toggleFavorite = useFavoriteStore(state => state.toggleFavorite);
  const isFavorite = useFavoriteStore(state => state.isFavorite);

  const handleCardClick = (photo: Photo) => {
    setSelectedPhoto(photo);
  };

  const closeModal = () => {
    setSelectedPhoto(null);
  };

  useEffect(() => {
    fetchDefaultPhotos();
  }, []);

  const fetchDefaultPhotos = async () => {
    setLoading(true);
    try {
      const data = await getPhotos('/photos?per_page=12');
      setPhotos(Array.isArray(data) ? data : []);
    } catch (error) {
      console.error('Erro ao buscar fotos:', error);
      setPhotos([]);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      if (search.trim() === '') {
        fetchDefaultPhotos();
        return;
      }
      const data = await getPhotos(`/search/photos?query=${encodeURIComponent(search)}&per_page=12`);
      setPhotos(Array.isArray(data.results) ? data.results : []);

    } catch (error) {
      console.error('Erro ao buscar fotos:', error);
      setPhotos([]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h1>Galeria de Fotos</h1>
      <form onSubmit={handleSearch} className="flex gap-2 mb-4">
        <Input
          type="text"
          placeholder="Buscar fotos..."
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
        <Button type="submit" disabled={loading}>
          Buscar
        </Button>
      </form>
      {loading ? (
        <div>Carregando...</div>
      ) : (
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3
          w-full h-full object-cover transition-transform duration-300 group-hover:scale-110">

          {Array.isArray(photos) && photos.map(photo => (
            <div key={photo.id} className="relative">

              <CardPhoto
                photo={photo}
                onCardClick={handleCardClick}
              />

              <button
                className="absolute top-2 right-2 text-2xl text-white drop-shadow"
                onClick={e => {
                  e.stopPropagation();
                  toggleFavorite(photo.id);
                }}
                aria-label="Favoritar"
              >
                {isFavorite(photo.id) ? <FaHeart className="text-red-500" /> : <FaRegHeart />}
              </button>
            </div>

          ))}
          <PhotoModal
            photo={selectedPhoto}
            onClose={closeModal}
          />
        </section>
      )}
    </div>
  );
}