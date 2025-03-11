import Header from './Components/Header/header';
import ContactSection from './Sections/contactSection';
import ProdactSection from './Sections/prodactSection';
import AddSection from './Sections/AddSection';

function App() {
  return (
    <main className="bg-amber-950 h-fit w-full ">

        <div className='fixed w-full z-50'>
          <Header />
        </div>

        <div className='pt-30 flex flex-col'> 
          <AddSection/>
          <ProdactSection />
          <ContactSection />
        </div>

      

    </main>
  );
}

export default App;
