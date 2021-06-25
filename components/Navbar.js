import { navLinks } from "../utils/navlinks";

export default function NavbarComponent() {
  return (
    <>
      <nav className="main-nav">
        {/* <!-- ***** Logo Start ***** --> */}
        <a href="index.html" className="logo">
          Company<em> Name</em>
        </a>
        {/* <!-- ***** Logo End ***** --> */}
        {/* <!-- ***** Menu Start ***** --> */}
        <ul className="nav">
          {Object.keys(navLinks).map((item) => (
            <li className="scroll-to-section" key={navLinks[item].id}>
              <a href={navLinks[item].link}>{navLinks[item].name}</a>
            </li>
          ))}
        </ul>
        <a className="menu-trigger">
          <span>Menu</span>
        </a>
        {/* <!-- ***** Menu End ***** --> */}
      </nav>
    </>
  );
}
