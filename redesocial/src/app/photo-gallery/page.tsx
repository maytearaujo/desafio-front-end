'use client'

import { useEffect, useState } from 'react';
// import CardPhotos from '../../components/cardPhotos';
import Photo from '../../models/photo';

import { search } from '../../services/service';

import dynamic from 'next/dynamic'
 
const CardPhotos = dynamic(
  () => import('../../components/cardPhotos'),
  {
    loading: () => <p>Loading...</p>,
  }
)

export default function PhotoGallery() {

  const [photos, setPhotos] = useState<Photo[]>([])

  async function searchPhotos() {
    try {
      await search('/', setPhotos)

    } catch (error) {
      console.error('Erro ao buscar fotos:', error);
      throw error;
    }
  }

  useEffect(() => {
    searchPhotos()
  }, []);

  return (
    <div>
      <h1>Galeria de Fotos</h1>
      <div className='w-full h-full grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3'>
        {photos.map((photo) => (
          <CardPhotos key={photo.id} photo={photo} />
        ))}
      </div>
    </div>
  );
}

