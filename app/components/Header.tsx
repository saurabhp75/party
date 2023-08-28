import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import type { User } from "@/party/utils/auth";
import Link from "next/link";
import UserButton from "./UserButton";

export default async function Header() {
  const session = await getServerSession(authOptions);
  const user = session?.user as User | null;

  return (
    <header className="z-10 p-4 sm:p-6 w-full border-b border-stone-300 sticky top-0 bg-white/80 backdrop-blur">
      <nav className="max-w-7xl m-auto flex justify-between items-center">
        <Link href="/">
          <h1 className="font-medium my-2">🎈Kolab</h1>
        </Link>
        <UserButton />
      </nav>
    </header>
  );
}
