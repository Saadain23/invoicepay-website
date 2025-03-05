import NavbarA from './NavbarA';
import Footer from './Footer';

export default function Layout({ children, translations }) {
  return (
    <div className="layout">
      <NavbarA translations={translations} />
      <main style={{ paddingTop: "70px"}}>
        {children}
      </main>
      <Footer translations={translations} />
    </div>
  );
}