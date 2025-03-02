import NavbarA from './NavbarA';


export default function Layout({ children }) {
  return (
    <div className="layout">
      <NavbarA />
      <main>{children}</main>
    </div>
  );
}