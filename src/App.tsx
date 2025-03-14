import Header from './Components/Header/header';
import ContactSection from './Sections/contactSection';

import { Route, Routes } from 'react-router';
import Home from './Sections/Home';
import Admin from './Sections/Admin';
//import AdminNave from './Sections/AdminNave';

function App() {
  return (
    <main className="bg-amber-950 h-fit w-full ">


      {/* Home */}
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<ContactSection />} />
      </Routes>

  
    </main>
  );
}

export default App;
