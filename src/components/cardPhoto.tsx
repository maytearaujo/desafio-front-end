'use client'

import Image from "next/image";
import Photo from '../models/photo'

// 1. Atualize a interface para receber a função de clique
interface CardPhotoProps {
    photo: Photo;
    onCardClick: (photo: Photo) => void; 
}

// 2. Receba a nova propriedade na função
export default function CardPhoto({ photo, onCardClick }: CardPhotoProps) {
    return (
        // 3. Adicione o evento onClick e classes para feedback visual
        <div 
            className='group cursor-pointer overflow-hidden rounded-lg shadow-md transition-all hover:shadow-xl'
            onClick={() => onCardClick(photo)} // Chama a função passando a foto específica
        >
            <Image
                src={photo.urls.regular}
                alt={photo.description || "Foto aleatória"}
                width={400} // Ajuste as dimensões conforme necessário para o layout
                height={400}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110" // Efeito de zoom no hover
                loading="lazy"
            />
        </div>
    );
}