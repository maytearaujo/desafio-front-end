'use client'

import Image from "next/image";
import Photo from '../models/photo'

interface CardPhotoProps {
    photo: Photo;
}

export default function CardPhoto({ photo }: CardPhotoProps) {
    return (
        <div className='border flex flex-col rounded-2xl overflow-hidden justify-between'>
            <header className='py-2 px-6 bg-indigo-800 text-white font-bold text-2xl'>
                Descrição
            </header>

            <div className="flex">
                <Image
                    src={photo.urls.regular}
                    alt={photo.description || "Foto aleatória"}
                    width={100}
                    height={100}
                    className="rounded-full m-4"
                />
                <p className="text-lg font-semibold mt-6">{photo.description || "Sem descrição"}</p>
                <p className="text-lg font-semibold mt-6">{photo.user.username}</p>
            </div>

        </div>
    );
}
