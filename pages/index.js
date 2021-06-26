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
                  Choose <em>Program</em>
                </h2>
                <Image
                  src="/images/line-dec.png"
                  alt="waves"
                  height={10}
                  width={50}
                />
                <p>
                  Training Studio is free CSS template for gyms and fitness
                  centers. You are allowed to use this layout for your business
                  website.
                </p>
              </div>
            </div>
            <div className="col-lg-6">
              <ul className="features-items">
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
                    <h4>Basic Fitness</h4>
                    <p>
                      Please do not re-distribute this template ZIP file on any
                      template collection website. This is not allowed.
                    </p>
                    <a href="#" className="text-button">
                      Discover More
                    </a>
                  </div>
                </li>
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
                    <h4>New Gym Training</h4>
                    <p>
                      If you wish to support TemplateMo website via PayPal,
                      please feel free to contact us.
                    </p>
                    <a href="#" className="text-button">
                      Discover More
                    </a>
                  </div>
                </li>
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
                    <h4>Basic Muscle Course</h4>
                    <p>
                      Credit goes to{" "}
                      <a
                        href="https://www.pexels.com"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Pexels website
                      </a>{" "}
                      for images and video background used in this HTML
                      template.
                    </p>
                    <a href="#" className="text-button">
                      Discover More
                    </a>
                  </div>
                </li>
              </ul>
            </div>
            <div className="col-lg-6">
              <ul className="features-items">
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
                    <h4>Advanced Muscle Course</h4>
                    <p>
                      You may want to browse through{" "}
                      <a
                        rel="nofollow"
                        href="https://templatemo.com/tag/digital-marketing"
                        target="_parent"
                      >
                        Digital Marketing
                      </a>{" "}
                      or{" "}
                      <a href="https://templatemo.com/tag/corporate">
                        Corporate
                      </a>{" "}
                      HTML CSS templates on our website.
                    </p>
                    <a href="#" className="text-button">
                      Discover More
                    </a>
                  </div>
                </li>
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
                    <h4>Yoga Training</h4>
                    <p>
                      This template is built on Bootstrap v4.3.1. It is easy to
                      adapt the columns and sections.
                    </p>
                    <a href="#" className="text-button">
                      Discover More
                    </a>
                  </div>
                </li>
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
                    <h4>Body Building Course</h4>
                    <p>
                      Suspendisse fringilla et nisi et mattis. Curabitur sed
                      finibus nisi. Integer nibh sapien, vehicula et auctor.
                    </p>
                    <a href="#" className="text-button">
                      Discover More
                    </a>
                  </div>
                </li>
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
                <img id="city" crossOrigin="anonymous" src="/images/mall.png" />
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
                <p>
                  Install the appropriate client for your platform be it Android
                  or IOS, download from their respective stores.
                </p>
                <div className="main-button scroll-to-section">
                  <div className="row">
                    <div className="col-lg-6">
                      <a href="#our-classNamees">Android</a>
                    </div>
                    <div className="col-lg-6">
                      <a href="#our-classNamees">Apple IOS</a>
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
