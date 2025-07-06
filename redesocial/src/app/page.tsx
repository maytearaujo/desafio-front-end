import Link from 'next/link';
import Menu from './menu/page';

export default function Home() {
  return (
    <div>
      <main className="flex flex-row justify-around items-center sm:items-start">
        <div>
          <Menu/>
        </div>
        <div className='border border-amber-500'>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem amet et, nostrum officia hic ad ipsam placeat cumque, aut minima quasi est distinctio, iste deleniti dolor maxime a officiis incidunt?
        </div>
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">

      </footer>
    </div>
  );
}
