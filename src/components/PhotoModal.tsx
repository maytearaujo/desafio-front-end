import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription,
} from '@/components/ui/dialog';

import Photo from '../models/photo';

import Image from 'next/image';

interface PhotoModalProps {
    photo: Photo | null;
    onClose: () => void;
}



export default function PhotoModal({ photo, onClose }: PhotoModalProps) {



    return (
        <Dialog open={!!photo} onOpenChange={(isOpen) => !isOpen && onClose()}>
            <DialogContent className="w-3xl flex">
                {photo && (
                    <>
                        <div className="mt-4">
                            <Image
                                src={photo.urls.regular}
                                alt={photo.description || 'Imagem aleatória'}
                                width={400}
                                height={350}
                            />
                        </div>
                        <DialogHeader>
                            <DialogTitle>{photo.description || 'Fotografia'}</DialogTitle>
                            {photo.user && (
                                <DialogDescription>
                                    Foto por: {photo.user.name}
                                </DialogDescription>
                            )}
                        </DialogHeader>
                    </>
                )}
            </DialogContent>
        </Dialog>
    );
}