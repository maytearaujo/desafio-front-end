'use client'

// import CardPhotos from '../../components/cardPhotos';
import { useEffect, useState } from 'react';
import Photo from '../../models/photo';

import { search } from '../../services/service';

import dynamic from 'next/dynamic'
import Link from 'next/link';

const CardPhotos = dynamic(
  () => import('../../components/cardPhoto'),
  {
    loading: () => <p>Loading...</p>,
  }
)

export default function PhotoGallery() {

  const [photos, setPhotos] = useState<Photo[]>([])

  async function searchPhotos() {
    try {
      await search('/photos?per_page=12', setPhotos);

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
      {/* <div className='w-full h-full grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
        {photos.map((photo) => (
          <Link href={`/photos/${photo.id}`} key={photo.id}>
            <CardPhotos photo={photo} />
          </Link>
        ))}
      </div> */}

    <section className="cards-container">
      {photos.map((photo) => (
        <Link className="card" key={photo.id} href={`/photos/${photo.id}`} passHref>
          {/* {photo.id} */}
          <CardPhotos photo={photo} />
        </Link>
      ))}
    </section>




    </div>




  );
}

