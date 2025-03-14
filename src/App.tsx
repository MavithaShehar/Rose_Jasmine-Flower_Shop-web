import Header from './Components/common/Header/header';
import ContactSection from './Components/pages/contactSection';

import { Route, Routes } from 'react-router';
import Home from './Components/pages/Home';
import Admin from './Components/pages/AdminDashboard';
import AdminNave from './Components/common/Navebar/AdminNave';
import AdminMakeDashBordPost from './Components/pages/AdminMakeDashBordPost';
import AdminDashBordPosts from './Components/pages/AdminDashBordPosts';
import AdminDashboard from './Components/pages/AdminDashboard';

function App() {
    // return (
    //   // <AdminDashboard />
    // );


  // return (
  //   // <main className='w-full  bg-black'>

  //   // <div>
  //     {/* Home */}
  //     {/* <Header />
  //   <Routes>
  //     <Route path="/" element={<Home />} />
  //     <Route path="/contact" element={<ContactSection />} />
  //   </Routes> */}
  //   // </div>

  //   {/* Admin  */}
  //   {/* <div className='w-full h-screen bg-blue-700 flex fixed '>


  //     <div className='w-1/5 h-screen bg-red-700 scroll-auto '>
  //       <AdminNave />
  //     </div>

  //     <div className='w-4/5 h-screen bg-green-400'>
  //       <Routes>
  //       <Route path="/admin" element={<Admin />} />
  //       <Route path="/admin/posters" element={<AdminMakeDashBordPost/>} />
  //       <Route path="/admin/prodact" element={<AdminDashBordPosts/>} />
  //     </Routes>
  //     </div>
  //   </div>


  // </main> */}
  // );
}

export default App;
