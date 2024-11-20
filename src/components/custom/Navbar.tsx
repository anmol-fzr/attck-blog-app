import { ThemeToggle } from "../ui";

export function Navbar() {
  return (
    <nav className="p-2 px-4 border-b flex justify-end sticky top-0 backdrop-blur !z-[5]">
      <ThemeToggle />
    </nav>
  );
}
