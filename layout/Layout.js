import HeaderComponent from "../components/Header";
import NavbarComponent from "../components/Navbar";
import FooterComponent from "../components/Footer";

export default function LayoutComponent({ children }) {
  return (
    <>
      <HeaderComponent />
      {/* <NavbarComponent /> */}
      {children}
      <FooterComponent />
    </>
  );
}
