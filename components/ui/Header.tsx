"use client";

import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { FaSun, FaMoon } from "react-icons/fa";
import { useTheme } from "@/app/hooks/useTheme";

const Header = () => {
  const { theme, toggleTheme, mounted } = useTheme();

  if (!mounted) return null;

  return (
    <header className="flex justify-between items-center p-4 border-b">
      <div className="flex items-center space-x-4">
        <button onClick={toggleTheme} className="text-xl">
          {theme === "light" ? <FaMoon /> : <FaSun />}
        </button>
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
          <li className="px-3 mx-2">
            <Link
              href="/"
              className="text-sm bg-blue-500 text-white rounded-full px-4 py-2 hover:bg-blue-700 transition-colors"
            >
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
