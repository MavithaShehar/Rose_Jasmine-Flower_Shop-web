import ContactBg from '../../src/assets/images/contactIMG/contact-Bg.jpg';
import Info from '../Components/Contact/info'
import Mail from '../Components/Contact/mail';

function ContactSection() {
  return (
    <footer>
      <div className="w-full h-[60vh] bg-cover bg-center flex items-center justify-around" style={{ backgroundImage: `url(${ContactBg})` }}>
        <Info></Info>
        <Mail></Mail>
      </div>
    </footer>
  );
}

export default ContactSection;
