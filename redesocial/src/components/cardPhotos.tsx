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
                    width={100}
                    height={100}
                    className="w-full h-full object-cover"
                />
                {/* <p className="text-lg">Descrição: {photo.description || "Sem descrição"}</p>
                <p className="text-lg">Fotografo: {photo.user.username}</p> */}
            </div>

        </div>
    );
}
