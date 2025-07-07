import Link from 'next/link';
import Menu from './menu/page';
import PhotoGallery from './photo-gallery/page';

export default function Home() {
  return (
    <div>
      <main className="flex flex-row justify-evenly grid-cols-3 items-center p-4 sm:items-start">
        <div className='w-[15%]'>
          <Menu />
        </div>
        <div className='flex flex-col items-center justify-center w-[90%]'>
          <PhotoGallery />
        </div>
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">

      </footer>
    </div>
  );
}
