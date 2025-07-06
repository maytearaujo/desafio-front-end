'use client'

import { useEffect, useState } from 'react';
import CardPhotos from '../../components/cardPhotos';
import Photo from '../../models/photo';

import { search } from '../../services/service';

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
      {photos.map((photo) => (
        <CardPhotos key={photo.id} photo={photo} />

      ))}
    </div>
  );
}

