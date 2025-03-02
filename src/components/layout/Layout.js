import NavbarA from './NavbarA';
import Footer from './Footer';

export default function Layout({ children }) {
  return (
    <div className="layout">
      <NavbarA />
      <main>{children}</main>
      <Footer />
    </div>
  );
}