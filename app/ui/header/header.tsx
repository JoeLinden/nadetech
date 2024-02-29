import Search from "@/app/ui/header/search";
//import SteamLoginButton from "@/app/ui/header/steam-login";
//import HeaderNav from "@/app/ui/header/header-nav.tsx"
import { getServerSession } from "next-auth";
import { SignIn, SignOut } from "@/app/ui/header/steam-login";
import { Fragment } from "react";

export default async function Header() {
  const session = await getServerSession();
  return (
    <nav className="header">
      <Search placeholder="Search nades..." />
      {session ? (
        <Fragment>
          <p>Hi {session?.user?.name}! 🧑‍🚀🚀</p>
          <SignOut />
        </Fragment>
      ) : (
        <Fragment>
          Do you want to play with me? <SignIn />
        </Fragment>
      )}
    </nav>
  );
}
