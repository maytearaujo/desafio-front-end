'use client'

import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { getPhotos } from '@/services/service';
import { useState } from 'react';

import dynamic from 'next/dynamic'
const CardPhoto = dynamic(
    () => import('../components/cardPhoto'),
    {
        loading: () => <p>Carregando Imagens...</p>,
    }
)




export default function SearchBar() {

    const [search, setSearch] = useState('');
    const [photos, setPhotos] = useState([]);
    const searchPhotos = () => {
        getPhotos(`/search/photos?query=${search}`, setPhotos);
    }

    return (
        <div>
            <Input placeholder="Buscar fotos..." id='textSearch' value={search} onChange={(event => setSearch(event.target.value))} />
            <Button onClick={searchPhotos}>Buscar</Button>
            <div>
                {photos.map(photo => (
                    <CardPhoto key={photo} photo={photo} onCardClick={handleCardClick} />
                ))}
            </div>
        </div>
    );
}