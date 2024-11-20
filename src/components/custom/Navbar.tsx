"use client";
import Image from "next/image";
import { Link } from "@/components";
import { useAuthStore } from "@/store";

export function Navbar() {
  const isLogin = useAuthStore((state) => state.creds.isLogin);
  return (
    <nav className="p-4 px-4 border-b flex items-center justify-between sticky top-0 backdrop-blur !z-[5]">
      <Link href="/#">
        <Image src="/logo.png" alt="Logo" width={240} height={55} />
      </Link>
      {isLogin ? (
        <Link href="/dashboard" variant="default">
          Dashboard
        </Link>
      ) : (
        <Link href="/login" variant="default">
          Login
        </Link>
      )}
    </nav>
  );
}
