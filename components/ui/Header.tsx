// components/ui/Header.tsx
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Header = () => {
  return (
    <header className="flex justify-between items-center p-4 border-b">
      <div className="flex items-center space-x-4">
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
        <span className="font-semibold text-sm">
          ALUMNO- CONTRERAS ESPARZA MIGUEL ANDY
        </span>
      </div>
      <nav>
        <ul className="flex space-x-4">
          <li>
            <Link href="/seccion1" className="text-sm">
              SECCIÓN 1
            </Link>
          </li>
          <li>
            <Link href="/seccion2" className="text-sm">
              SECCIÓN 2
            </Link>
          </li>
          <li>
            <Link href="/seccion3" className="text-sm">
              SECCIÓN 3
            </Link>
          </li>
          <li>
            <Link href="/" className="text-sm">
              INICIO
            </Link>
          </li>
        </ul>
      </nav>
      <Avatar>
        <AvatarImage src="/assets/res.jpg" alt="User" />
        <AvatarFallback>US</AvatarFallback>
      </Avatar>
    </header>
  );
};

export default Header;
