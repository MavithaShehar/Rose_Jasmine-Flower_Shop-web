
import AddSection from './AddSection'

import ContactSection from './contactSection'
import ProdactSection from './prodactSection'

function Home() {
  return (
    <main>
        <div className='pt-30 flex flex-col'> 
          <AddSection/>
          <ProdactSection />
          <ContactSection />
        </div>
    </main>
  )
}

export default Home
