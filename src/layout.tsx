import { Outlet } from "react-router-dom";
import AdminNav from "../src/Components/common/Navebar/AdminNave";
import { useState } from "react";
import Header from "./Components/common/Header/header";

export default function Layout() {
    const [isUser, setIUser] = useState(true);
    const [isAdmin, setIsAdmin] = useState(false);

    return (
        <>
            {isAdmin ? (
                <div className="flex h-screen">
                    <AdminNav />
                    <div className="flex-grow px-2 overflow-y-auto relative text-red-500">
                        <Outlet />
                    </div>
                </div>
            ) : (
                <div className="flex flex-col h-screen">
                    <header>
                        <Header />
                    </header>
                    <div className="flex-grow">
                        <Outlet />
                    </div>
                </div>
            )}
        </>
    );
}
