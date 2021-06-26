import Image from "next/image";
import { navLinks } from "../utils/navlinks";
import { useState } from "react";

export default function NavbarComponent() {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <>
      <nav className="main-nav">
        {/* <!-- ***** Logo Start ***** --> */}
        <div className="logo">
          <Image src="/images/mall-logo.png" alt="" height={80} width={120} />
        </div>
        {/* <!-- ***** Logo End ***** --> */}

        {/* <!-- ***** Menu Start ***** --> */}
        <ul
          className={`nav ${collapsed ? "" : "active"}`}
          style={{ display: collapsed ? "block" : "none" }}
        >
          {Object.keys(navLinks).map((item) => (
            <li className="scroll-to-section" key={navLinks[item].id}>
              <a href={navLinks[item].link}>{navLinks[item].name}</a>
            </li>
          ))}
        </ul>
        <a
          className={`menu-trigger ${collapsed ? "active" : ""}`}
          onClick={() => {
            setCollapsed(!collapsed);
          }}
        >
          <span>Menu</span>
        </a>
        {/* <!-- ***** Menu End ***** --> */}
      </nav>
    </>
  );
}
