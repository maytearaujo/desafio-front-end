// import CardPhoto from '../../components/cardPhoto';
import { getPhotoById } from '../../../services/service';
import Image from "next/image";

interface PhotoPageProps {
  params: { id: string };
}

export default async function PhotoPage({ params }: PhotoPageProps) {

  const { id } = params;
  const photo = await getPhotoById(id);

  if (!photo) {
    return (
      <div className="container w-1/3 mx-auto">
        <h1 className="text-4xl text-center my-4">Foto não encontrada</h1>
      </div>
    );
  }

  return (
    <div className="container w-1/3 mx-auto border border-red border-4">
      <h1 className="text-4xl text-center my-4 color-red">Foto Individual</h1>
      <div className="border flex flex-col rounded-2xl overflow-hidden justify-between">

        <Image
          src={photo.urls.regular}
          alt={photo.description || "Foto aleatória"}
          width={300}
          height={300}
          priority
          className="w-full h-full"
        />
        <div className="p-4 text-center text-lg font-semibold">
          Fotógrafo: {photo.user.username}            
          Descrição: {photo.description || 'Sem descrição'}
        </div>
      </div>
    </div>
  );
}