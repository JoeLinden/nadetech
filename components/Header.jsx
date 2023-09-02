import Search from "./Search";
import SidebarButton from "./SidebarButton";

export default function Header({ onType }) {
    return (
        <header className="split-header">
            <Search onType={onType}/>
            <span>COLLECTIONS</span>
            <nav>FILTERS</nav>
        </header>
    )
}