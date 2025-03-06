import React from "react";
import { navigate } from 'astro:transitions/client';

import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { name: "Main", path: "/" },
  { name: "Audi", path: "/audi" },
  { name: "Bmw", path: "/bmw" },
];

export function Header() {
  const [currentPath, setCurrentPath] = React.useState("");

  React.useEffect(() => {
    setCurrentPath(window.location.pathname);
  }, []);

  function handleLogoClick() {
    navigate('/')
  }

  return (
    <header className="flex items-center justify-between px-6 py-4 bg-white shadow-md rounded-b-lg">
      <h1
        onClick={handleLogoClick}
        className="text-xl font-bold cursor-pointer select-none"
      >
        Cars
      </h1>

      <nav className="flex gap-6">
        {NAV_LINKS.map((link) => (
          <a
            key={link.path}
            href={link.path}
            className={cn(
              "text-gray-600 hover:text-black transition",
              currentPath === link.path && "text-black font-semibold underline",
            )}
          >
            {link.name}
          </a>
        ))}
      </nav>
    </header>
  );
}
