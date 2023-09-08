import Search from "./Search";
import SidebarButton from "./SidebarButton";

export default function Header({ onType }) {
    return (
        <header className="split-header">
            <Search onType={onType}/>
            <h1>COLLECTIONS</h1>
            <h1>FILTERS</h1>
        </header>
    )
}