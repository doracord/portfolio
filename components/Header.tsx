import Link from "next/link";
import { ModeToggle } from "./ModeToggle";
import { DropMenu } from "./DropMenu";

const LinkItems = [
  {
    id: "1",
    href: "/about",
    text: "About",
  },
  {
    id: "2",
    href: "/works",
    text: "Works",
  },
  {
    id: "3",
    href: "/contact",
    text: "Contact",
  },
];

export function Header() {
  return (
    <header className="flex fixed w-full items-center justify-between md:justify-around p-4 z-[50]">
      <Link className="text-2xl" href="/">
        Dora
      </Link>
      <div className="space-x-4 flex hidden md:block">
        {LinkItems.map((item) => {
          return (
            <Link
              key={item.id}
              href={item.href}
              className="group relative text-lg overflow-hidden"
            >
              {item.text}
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-black dark:bg-white transform scale-x-0 origin-right transition-transform duration-300 group-hover:scale-x-100 group-hover:origin-left"></span>
            </Link>
          );
        })}
      </div>
      <div className="flex items-center space-x-2">
        <div className="block md:hidden">
          <DropMenu />
        </div>
        <ModeToggle />
      </div>
    </header>
  );
}
