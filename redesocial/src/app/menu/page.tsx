import Link from "next/link";

export default function Menu() {
    return (
        <nav>
            <Link href='/'>Home</Link>
            <Link href='/photo-gallery'>Ver Fotos</Link>
            {/* <Link href="/dashboard">Dashboard</Link> */}

        </nav>
    );
}