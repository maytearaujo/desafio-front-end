'use client'

import { useEffect, useState } from 'react';
import Photo from '../../models/photo';
import { search } from '../../services/service';

import Image from 'next/image';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog'; 

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

  async function searchPhotos() {
    try {
      await search('/photos?per_page=12', setPhotos);
    } catch (error) {
      console.error('Erro ao buscar fotos:', error);
    }
  }

  useEffect(() => {
    searchPhotos();
  }, []);

  const handleCardClick = (photo: Photo) => {
    setSelectedPhoto(photo);
  };

  const closeModal = () => {
    setSelectedPhoto(null);
  };

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

      <Dialog open={!!selectedPhoto} onOpenChange={(isOpen) => !isOpen && closeModal()}>
        <DialogContent className="max-w-3xl flex">
          {selectedPhoto && (
            <>              
              <div className="mt-4">
                <Image
                  src={selectedPhoto.urls.regular}
                  alt={selectedPhoto.description || 'Imagem aleatória'}
                  width={400}
                  height={350}
                />
              </div>
              <DialogHeader>
                <DialogTitle>{selectedPhoto.description || 'Fotografia'}</DialogTitle>
                {selectedPhoto.user && (
                    <DialogDescription>
                        Foto por: {selectedPhoto.user.name}
                    </DialogDescription>
                )}
              </DialogHeader>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}