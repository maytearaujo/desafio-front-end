import Link from "next/link";
import { FaSearch } from "react-icons/fa";
import { FaHouse } from "react-icons/fa6";
import { FaRegCompass } from "react-icons/fa";
import { FaRegPaperPlane } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa6";
import { RiMessengerLine } from "react-icons/ri";
import { FaAlignJustify } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";
import { FaRegUser } from "react-icons/fa";

export default function Menu() {
    return (
        <nav className="flex flex-col justify-between justify-items-stretch gap-4 p-4">
            <Link href= '/'>
                <div className="flex flex-row gap-2">
                    <FaHouse />
                    Página Inicial
                </div>
            </Link>
            <Link href='/#'>
                <div className="flex flex-row gap-2">
                    <FaSearch />
                    Pesquisa
                </div>
            </Link>
            <Link href='/'>
                <div className="flex flex-row gap-2">
                    <FaRegCompass />
                    Explorar
                </div>
            </Link>
            <Link href='/#'>
                <div className="flex flex-row gap-2">
                    <FaRegPaperPlane />
                    Reels
                </div>
            </Link>
            <Link href='/'>
                <div className="flex flex-row gap-2">
                    <RiMessengerLine />
                    Mensagens
                </div>
            </Link>
            <Link href='/#'>
                <div className="flex flex-row gap-2">
                    <FaRegHeart />
                    Notificações
                </div>
            </Link>
            <Link href='/'>
                <div className="flex flex-row gap-2">
                    <FaPlus />
                    Criar
                </div>
            </Link>
            <Link href='/#'>
                <div className="flex flex-row gap-2">
                    <FaRegUser />
                    Perfil
                </div>
            </Link>
            <Link href='/#'>
                <div className="flex flex-row gap-2">
                    <FaAlignJustify />
                    Mais
                </div>
            </Link>
        </nav>
    );
}