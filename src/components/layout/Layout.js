import NavbarA from './NavbarA';
import Footer from './Footer';

export default function Layout({ children, translations }) {
  return (
    <div className="layout">
      <NavbarA translations={translations} />
      <main>{children}</main>
      <Footer />
    </div>
  );
}