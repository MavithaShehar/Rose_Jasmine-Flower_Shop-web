import { Outlet } from "react-router-dom";
import AdminNav from "../src/Components/common/Navebar/AdminNave";
import Navbar from "./Components/common/Navebar/navbar";
import { useState } from "react";
import Header from "./Components/common/Header/header";

export default function Layout() {
    const [isUser, setIUser] = useState(false);
    const [isAdmin, setIsAdmin] = useState(true);
  return (
    <>
    {isAdmin ? 
        <div style={{ display: 'flex', height: '100vh' }}>
           
                <AdminNav />
           
        <div style={{
           color:"red",
            flexGrow: 1,
            padding: '20px',
            overflowY: 'auto',
        }}>
            <Outlet />
        </div>
    </div>
    : 
    <div style={{ display: 'flex', flexDirection: 'column', height: '100vh'}}>
      {/* Header */}
      <header >
        <Header />
      </header>
      <div>
        <Outlet />
      </div>
    </div>
    }
    </>
  );
}