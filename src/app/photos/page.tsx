'use client'

import { useEffect, useState } from 'react';
import Photo from '../../models/photo';
import { search } from '../../services/service';

import Image from 'next/image'; // Importe o Image para usar no modal
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog'; // Importe os componentes do Dialog

// Seu import dinâmico está ótimo, vamos mantê-lo
import dynamic from 'next/dynamic'
const CardPhoto = dynamic(
  () => import('../../components/cardPhoto'),
  {
    loading: () => <p>Carregando card...</p>,
  }
)

export default function PhotoGallery() {
  const [photos, setPhotos] = useState<Photo[]>([]);
  // 1. Estado para controlar o modal e a foto selecionada
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);

  // A busca de dados permanece a mesma
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

  // 2. Funções para abrir e fechar o modal
  const handleCardClick = (photo: Photo) => {
    setSelectedPhoto(photo);
  };

  const closeModal = () => {
    setSelectedPhoto(null);
  };

  return (
    <div>
      <h1>Galeria de Fotos</h1>
      <section className="cards-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
        {photos.map((photo) => (
          // 3. Removido o <Link> e adicionado o onCardClick
          <CardPhoto 
            key={photo.id} 
            photo={photo} 
            onCardClick={handleCardClick} 
          />
        ))}
      </section>

      {/* 4. Renderização do componente Dialog */}
      <Dialog open={!!selectedPhoto} onOpenChange={(isOpen) => !isOpen && closeModal()}>
        <DialogContent className="max-w-3xl">
          {selectedPhoto && (
            <>
              <DialogHeader>
                <DialogTitle>{selectedPhoto.description || 'Fotografia'}</DialogTitle>
                {selectedPhoto.user && (
                    <DialogDescription>
                        Foto por: {selectedPhoto.user.name}
                    </DialogDescription>
                )}
              </DialogHeader>
              <div className="mt-4">
                <Image
                  src={selectedPhoto.urls.regular}
                  alt={selectedPhoto.description || 'Imagem em modal'}
                  width={1200}
                  height={800}
                  className="w-full h-auto object-contain rounded-md"
                />
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}