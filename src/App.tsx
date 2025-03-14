import Header from './Components/Header/header';
import ContactSection from './Sections/contactSection';
import ProdactSection from './Sections/prodactSection';
import AddSection from './Sections/AddSection';
import AdminSideBar from './Sections/AdminSideBar';
import AdminDashBordPosts from './Sections/AdminDashBordPosts';
import AdminMakeDashBordPost from './Sections/AdminMakeDashBordPost';

import Navbar from './Components/Navebar/navbar';
import { Route, Routes } from 'react-router';
import Home from './Sections/Home';

function App() {
  return (
    <main className="bg-amber-950 h-fit w-full ">   
    <Header/>
     <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/contact" element={<ContactSection/>}/>
     </Routes>
    </main>
  );
}

export default App;
