"use client";

import { useSession } from "next-auth/react";
import Signout from "./Signout";
import Avatar from "./Avatar";
import Link from "next/link";

function UserButton() {
  const { data: session, status, update } = useSession();

  return (
    <div>
      {session ? (
        <div className="flex gap-2 items-center">
          <Avatar
            username={session?.user?.name as string}
            image={session?.user?.image ?? null}
          />
          <span>Hi {session?.user?.name}!</span>
          <Signout />
        </div>
      ) : (
        <div>
          {/* <span>{window.location.href}</span> */}
          <Link
            className="underline"
            href={`/api/auth/signin?callbackUrl=${window.location.href}`}
          >
            Sign in
          </Link>
        </div>
      )}
    </div>
  );

  //   return <div>{session && <div>Hi</div>}</div>;
}

export default UserButton;
