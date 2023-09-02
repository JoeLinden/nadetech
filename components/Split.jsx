"use client";
import Header from "/components/Header";
import Sidebar from "/components/Sidebar";
import Content from "/components/Content";
import { useState } from "react";

export default function Split() {
    const [query, setQuery] = useState("");
    return (
        <div className="split">
            <Header onType={e => setQuery(e.target.value)}/>
            <Sidebar />
            <Content query={query}/>
        </div>
    )
}