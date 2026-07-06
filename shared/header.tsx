"use client";
import Link from "next/link";
import ToggleTheme from "./toggle-theme";
import { navLinks } from "@/constants";
import GlobalSearch from "./global-search";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

const Header = () => {
  const pathName = usePathname();

  return (
    <header className="h-[10vh] backdrop-blur-sm border-b fixed z-40 inset-0 bg-background">
      <div className="container max-w-6xl mx-auto h-full w-full flex items-center justify-between px-6">
        <Link href="/">
          <h1 className="text-4xl font-crete-round">Logo</h1>
        </Link>
        <div className="gap-2 hidden md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.route}
              className={cn(
                "hover:bg-blue-400/20 py-1 px-3 cursor-pointer rounded-sm transition-colors",
                pathName === link.route && "text-blue-400 font-semibold",
              )}
            >
              {link.name}
            </Link>
          ))}
        </div>
        <div className="flex items-center gap-1">
          <GlobalSearch />
          <ToggleTheme />
        </div>
      </div>
    </header>
  );
};

export default Header;
