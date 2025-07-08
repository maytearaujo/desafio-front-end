'use client'

import Image from "next/image";
import Photo from '../models/photo'

interface CardPhotoProps {
    photo: Photo;
}

export default function CardPhoto({ photo }: CardPhotoProps) {
    return (
        <div className='border grid grid-template-columns-[25%-1fr-1fr] border-4 border-black'>

            <div className="w-full h-full flex flex-col items-center justify-center">
                <Image
                    src={photo.urls.regular}
                    alt={photo.description || "Foto aleatória"}
                    width={180}
                    height={180}
                    className="w-full h-full"
                    loading="lazy"
                />
            </div>

        </div>
    );
}