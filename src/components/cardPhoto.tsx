'use client'

import Image from "next/image";
import Photo from '../models/photo'
import { useFavoriteStore } from "@/store/favorites";
import { FaHeart, FaRegHeart } from "react-icons/fa";

interface CardPhotoProps {
    photo: Photo;
    onCardClick: (photo: Photo) => void; 
}

export default function CardPhoto({ photo, onCardClick }: CardPhotoProps) {
    // 1. Lógica do Zustand movida para o lugar certo
    const toggleFavorite = useFavoriteStore(state => state.toggleFavorite);
    const isFavorite = useFavoriteStore(state => state.favorites.some(p => p === photo.id));

    const handleFavoriteClick = (e: React.MouseEvent) => {
        e.stopPropagation(); // Impede que o clique no botão abra o modal
        toggleFavorite(photo.id);
    };

    return (
        <div
            className='relative group cursor-pointer overflow-hidden rounded-lg shadow-md transition-all hover:shadow-xl aspect-[3/4]'
            onClick={() => onCardClick(photo)}
        >
            <Image
                src={photo.urls.regular}
                alt={photo.description || "Foto da galeria"}
                fill // 2. Usando 'fill' para preenchimento responsivo
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover transition-transform duration-300 group-hover:scale-110"
            />
            {/* 3. Botão de favorito adicionado */}
            <button
                onClick={handleFavoriteClick}
                className="absolute top-3 right-3 p-2 bg-black bg-opacity-40 rounded-full text-white transition-opacity opacity-0 group-hover:opacity-100"
                aria-label={isFavorite ? 'Remover dos favoritos' : 'Adicionar aos favoritos'}
            >
                {isFavorite ? <FaHeart size={20} className="text-red-500" /> : <FaRegHeart size={20} />}
            </button>
        </div>
    );
}