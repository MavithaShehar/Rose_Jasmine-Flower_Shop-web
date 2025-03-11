import Header from './Components/Header/header'
import ContactSection from './Sections/contactSection'

import ProdactSection from './Sections/prodactSection'
function App() {

  return (
    <main className="bg-gray-50 h-screen">

     <div className="w-full h-fit mx-auto">
     <Header></Header>
     <ProdactSection></ProdactSection>
     <ContactSection></ContactSection>
     </div>

    </main>
  )
}

export default App
