"use client";

import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function Signout() {
  const router = useRouter();

  const logout = () => {
    const data = signOut({ redirect: false, callbackUrl: "/" }).then((data) => {
      router.push(data.url);
    });
  };

  return (
    <button
      // onClick={() => signOut({ callbackUrl: `${window.location.href}` })}
      onClick={() => logout()}
      className="underline"
    >
      Sign out
    </button>
  );
}
