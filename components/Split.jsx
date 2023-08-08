import Header from "/components/Header";
import Sidebar from "/components/Sidebar";
import Content from "/components/Content";

export default function Split() {
    return (
        <div className="split">
            <Header />
            <Sidebar />
            <Content />
        </div>
    )
}