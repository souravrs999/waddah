import Head from "next/head";
import NavbarComponent from "./Navbar";

export default function HeaderComponent() {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <meta name="description" content="" />
        <meta name="author" content="" />
      </Head>
      {/* <!-- ***** Header Area Start ***** --> */}
      <header className="header-area header-sticky">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <NavbarComponent />
            </div>
          </div>
        </div>
      </header>
      {/* <!-- ***** Header Area End ***** --> */}
    </>
  );
}
