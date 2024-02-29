import Search from "@/app/ui/header/search";
//import SteamLoginButton from "@/app/ui/header/steam-login";
//import HeaderNav from "@/app/ui/header/header-nav.tsx"
export default function Header() {
  return (
    <nav className="header">
      <Search placeholder="Search nades..." />
    </nav>
  );
}
