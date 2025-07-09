'use client'

import { useEffect, useState } from 'react';
import Photo from '../../models/photo';
import { getPhotos } from '../../services/service';

import PhotoModal from '@/components/PhotoModal';

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

  const handleCardClick = (photo: Photo) => {
    setSelectedPhoto(photo);
  };

  const closeModal = () => {
    setSelectedPhoto(null);
  };

  async function getAllPhotos() {
    try {
      await getPhotos('/photos?per_page=12', setPhotos);
    } catch (error) {
      console.error('Erro ao buscar fotos:', error);
    }
  }

  useEffect(() => {
    getAllPhotos();
  }, []);


  return (
    <div>
      <h1>Galeria de Fotos</h1>
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3
        w-full h-full object-cover transition-transform duration-300 group-hover:scale-110">
        {photos.map((photo) => (
          <CardPhoto
            key={photo.id}
            photo={photo}
            onCardClick={handleCardClick}
          />
        ))}
      </section>

      <PhotoModal
        photo={selectedPhoto}
        onClose={closeModal}
      />
    </div>
  );
}