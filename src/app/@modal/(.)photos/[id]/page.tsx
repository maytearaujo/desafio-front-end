import { Modal } from "./modal";
import Image from "next/image";
import { getPhotoById } from '../../../../services/service';

interface PhotoModalProps {
  params: { id: string } | Promise<{ id: string }>;
}

export default async function PhotoPage({ params }: PhotoModalProps) {
  // Await params in case it's a Promise (defensive for Next.js dynamic routes)
  const awaitedParams = await params;
  const { id } = awaitedParams;

  const photo = await getPhotoById(id);

  if (!photo) {
    return (
      <div className="container w-1/3 mx-auto">
        <h1 className="text-4xl text-center my-4">Foto não encontrada</h1>
      </div>
    );
  }

  return (
    <Modal>
      <div>
        <Image
          src={photo.urls.regular}
          alt={photo.description || 'Foto'}
          width={600}
          height={400}
          priority
        />
        <div className="p-4 text-center text-lg font-semibold">
          Fotógrafo: {photo.user.username}
        </div>
      </div>
    </Modal>
  );
}