import { Outlet } from "react-router-dom";
import Header from "./Components/common/Header/header";
import AboutShop from "./Components/pages/AboutShop"

export default function Layout() {
   

    return (
        <>     
                <div className="flex flex-col h-screen">
                    <header>
                        <Header />
                    </header>
                    <div className="flex-grow">
                        <Outlet />
                    </div>
                </div>
            
        </>
    );
}