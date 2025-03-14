import Header from './Components/Header/header';
import ContactSection from './Sections/contactSection';

import { Route, Routes } from 'react-router';
import Home from './Sections/Home';
import Admin from './Sections/Admin';
import AdminNave from './Components/Navebar/AdminNave';
import AdminMakeDashBordPost from './Sections/AdminMakeDashBordPost';

function App() {
  return (
    <main className='w-full  bg-black'>

      <div>
        {/* Home */}
        {/* <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<ContactSection />} />
      </Routes> */}
      </div>

      {/* Admin  */}
      <div className='w-full h-full bg-blue-700 flex'>


        <div className='w-1/5 h-screen bg-red-700'>
          <AdminNave />
        </div>

        <div className='w-4/5 h-screen bg-green-400'>
          <Routes>
          <Route path="/admin" element={<Admin />} />
          <Route path="/admin/dashbord" element={<AdminMakeDashBordPost/>} />
        </Routes>
        </div>
      </div>


    </main>
  );
}

export default App;
