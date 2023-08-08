import Search from "./Search";
import SidebarButton from "./SidebarButton";

export default function Header() {
    return (
        <header className="split-header">
            <Search />
            <span>COLLECTIONS</span>
            <nav>FILTERS</nav>
        </header>
    )
}