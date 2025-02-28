import Navbar from './navbar';


export default function Layout({ children }) {
  return (
    <div className="layout">
      <Navbar />
      <main>{children}</main>
    </div>
  );
}