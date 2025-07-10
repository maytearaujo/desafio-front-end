import Link from 'next/link';
import Menu from '../components/menu';
import Photos from '../app/photos/page';

export default function Home() {
  return (
    <div>
      <main className="flex flex-row justify-evenly grid-cols-3 items-center p-4 sm:items-start">
        <div className='w-[15%]'>
          <Menu />
        </div>
        <div className='flex flex-col items-center justify-center w-[85%]'>
          <Photos />
        </div>
      </main>
    </div>
  );
}
