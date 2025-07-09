'use client'

import Image from "next/image";
import Photo from '../models/photo'

interface CardPhotoProps {
    photo: Photo;
    onCardClick: (photo: Photo) => void; 
}

export default function CardPhoto({ photo, onCardClick }: CardPhotoProps) {
    return (
        <div 
            className='group cursor-pointer overflow-hidden shadow-md transition-all hover:shadow-xl aspect-2/3'
            onClick={() => onCardClick(photo)} 
        >
            <Image
                src={photo.urls.regular}
                alt={photo.description || "Foto aleatória"}
                width={400} 
                height={350}                
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110 border-2 border-black"
            />
        </div>
    );
}