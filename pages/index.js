import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Entity, Scene } from "aframe-react";

export default function Home() {
  const [appRendered, setAppRendered] = useState(false);
  useEffect(() => {
    if (typeof window != "undefined") {
      require("aframe");
      setAppRendered(true);
    }
  }, []);

  return (
    <>
      {/* <!-- ***** Main Banner Area Start ***** --> */}
      <div className="main-banner" id="top">
        <video autoPlay muted loop id="bg-video">
          <source src="/images/vid-bg.mp4" type="video/mp4" />
        </video>

        <div className="video-overlay header-text">
          <div className="caption">
            <h6>A mall like no other</h6>
            <h2>
              Bridge <em>Mall</em>
            </h2>
            <div className="main-button scroll-to-section">
              <a href="#vr-experience">Check it out</a>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- ***** Main Banner Area End ***** --> */}

      {/* <!-- ***** Features Item Start ***** --> */}
      <section className="section" id="features">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 offset-lg-3">
              <div className="section-heading">
                <h2>
                  ABOUT THE <em>PLATFORM</em>
                </h2>
                <Image
                  src="/images/line-dec.png"
                  alt="waves"
                  height={10}
                  width={50}
                />
                <p>
                  Virtual Shopping Mall platform for providing shopping
                  destination which brings values to the shopping experience of
                  consumers in replacing traditional mode of shopping with the
                  latest technology.
                </p>
              </div>
            </div>
            <div className="col-lg-12">
              <ul className="features-items">
                <div className="row">
                  <div className="col-lg-4">
                    <li className="feature-item">
                      <div className="left-icon">
                        <Image
                          src="/images/features-second-icon.png"
                          alt="First One"
                          height={100}
                          width={100}
                        />
                      </div>
                      <div className="right-content">
                        <h4>Mall Creation & Management</h4>
                        <p>
                          Virtual platform for shopping mall will provide
                          opportunity to create and manage the mall virtually.
                          The visitors can register through our platform so that
                          management of the shops will be more effective and
                          efficient.
                        </p>
                        {/* <a href="#" className="text-button">
                      Discover More
                    </a> */}
                      </div>
                    </li>
                  </div>
                  <div className="col-lg-4">
                    <li className="feature-item">
                      <div className="left-icon">
                        <Image
                          src="/images/features-third-icon.png"
                          alt="First One"
                          height={100}
                          width={100}
                        />
                      </div>
                      <div className="right-content">
                        <h4>Webapp for Sellers</h4>
                        <p>
                          Seller can add and manage the 3D models and also
                          interact with the buyers inside the shop. They can
                          also upload the offer prices of each product which
                          will automatically redirect as a mail or SMS
                          notification to the buyers.
                        </p>
                        {/* <a href="#" className="text-button">
                          Discover More
                        </a> */}
                      </div>
                    </li>
                  </div>
                  <div className="col-lg-4">
                    <li className="feature-item">
                      <div className="left-icon">
                        <Image
                          src="/images/features-first-icon.png"
                          alt="First One"
                          height={100}
                          width={100}
                        />
                      </div>
                      <div className="right-content">
                        <h4>Mobile app for Buyers (Android )</h4>
                        <p>
                          Buyers can login from their Android mobile application
                          to explore the shopping experience virtually. Once the
                          users get registered in our platform, they can enter
                          the mall lobby with floor plan and the buyers can
                          easily choose their shop for purchase. The purchased
                          products will be delivered through the e-commerce
                          platform.
                        </p>
                        {/* <a href="#" className="text-button">
                          Discover More
                        </a> */}
                      </div>
                    </li>
                  </div>
                </div>
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- ***** Features Item End ***** --> */}

      {/* <!-- ***** vr experience ***** --> */}
      <section className="section" id="vr-experience">
        <div className="vr-container">
          {appRendered && (
            <Scene embedded>
              <a-assets>
                <img id="city" src="/images/mall.png" />
                <img id="android" src="/images/android.png" />
                <img id="apple" src="/images/apple.png" />
              </a-assets>
              <Entity
                primitive="a-sky"
                id="image-360"
                radius="100"
                src="#city"
              />
              <Entity primitive="a-camera">
                <Entity primitive="a-cursor" />
              </Entity>

              <Entity
                primitive="a-image"
                geometry={{ primitive: "plane", width: 2 }}
                material={{ shader: "flat", src: "#android" }}
                rotation={{ x: 0, y: 15, z: 0 }}
                position="-2 0 -5"
                events={{
                  click: () =>
                    (window.location.href = "https://www.android.com"),
                }}
              />

              <Entity
                primitive="a-image"
                href="www.google.com"
                geometry={{ primitive: "plane", width: 2 }}
                material={{ shader: "flat", src: "#apple" }}
                rotation={{ x: 0, y: -15, z: 0 }}
                position="2 0 -5"
                events={{
                  click: () => (window.location.href = "https://www.apple.com"),
                }}
              />
            </Scene>
          )}
        </div>
      </section>
      {/* <!-- ***** vr experience ***** --> */}

      {/* <!-- ***** Call to Action Start ***** --> */}
      <section className="section" id="call-to-action">
        <div className="container">
          <div className="row">
            <div className="col-lg-10 offset-lg-1">
              <div className="cta-content">
                <h2>
                  Don’t <em>think</em>, begin <em>today</em>!
                </h2>
                <p>Install the application and experience shopping virtually</p>
                <div className="main-button scroll-to-section">
                  <div className="row">
                    <div className="col-lg-6 mt-5">
                      <a href="#">Web app</a>
                    </div>
                    <div className="col-lg-6 mt-5">
                      <a href="#">Mobile app</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- ***** Call to Action End ***** --> */}
    </>
  );
}
