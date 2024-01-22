"use client";
import { Breadcrumbs } from "./material-tailwind";
import Link from "next/link";
import { useUser } from "@/hooks/useUser";
import { useLogout } from "@/hooks/useLogout";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center p-8">
      <h6>Shop</h6>
      <Breadcrumbs className="justify-center" placeholder={undefined}>
        <Link href="/#">Home</Link>
        <Link href="/shop">Shop</Link>
        <Link href="/cart">Cart</Link>
        <LoginButton />
      </Breadcrumbs>
    </nav>
  );
}

function LoginButton() {
  const { user } = useUser();
  const { logout } = useLogout();
  if (!user?.isLogin) {
    return <Link href="/login">Login</Link>;
  }
  return (
    <Link href="/#" onClick={() => logout()}>
      Logout
    </Link>
  );
}
