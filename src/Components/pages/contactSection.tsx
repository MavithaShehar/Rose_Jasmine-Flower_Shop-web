import ContactBg from '../../assets/images/contactIMG/contact-Bg.jpg';
import Info from './Contact/info';
import Mail from './Contact/mail';

function ContactSection() {
  return (
    <footer id="contact_section" className="w-full h-[60vh] bg-cover bg-center flex items-center justify-around"
      style={{ backgroundImage: `url(${ContactBg})` }}>
      <Info />
      <Mail />
    </footer>
  );
}

export default ContactSection;
