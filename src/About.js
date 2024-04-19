import React from "react";
import Heading from "./Heading";
import train from "./images/train.webp";
import {
  MDBFooter,
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBIcon,
  MDBBtn,
} from "mdb-react-ui-kit";
import train1 from "./images/Sri_Lanka_Railway_logo.png";
import "./style.css";

export default function About() {
  return (
    <>
      <Heading />

      <div
        style={{ flexDirection: "column", alignItems: "center" }}
        className="container d-flex"
      >
        <div
          style={{
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            display: "flex",
          }}
          className="illustration"
        >
          <h2>Sri Lankan Railway Department</h2>
          <img src={train1} alt="Train Illustration" style={{ width: "40%" }} />
        </div>
        <div className="contents text-center">
          <ul>
            "Railway Sri Lanka: Discover the Heart of Our Journey At Railway Sri
            Lanka, we're more than just a mode of transportation – we're a
            community-driven endeavor committed to enhancing travel experiences
            across our beautiful island. Our story is one of reliability,
            safety, and connection. Safety First: We prioritize your safety
            above all else. From meticulously maintained trains to trained
            professionals, rest assured, your well-being is our top priority.
            Sustainable Travel: As custodians of Sri Lanka's natural beauty,
            we're dedicated to reducing our environmental footprint and
            preserving our stunning landscapes for future generations. Customer
            Satisfaction: Your comfort and satisfaction are paramount. From
            seamless booking experiences to onboard amenities, we're here to
            make every journey memorable. Community Connection: We're proud to
            connect communities, facilitate cultural exchange, and contribute to
            the economic growth and development of our nation. Join Us: Whether
            you're a local commuter or a curious traveler, Railway Sri Lanka
            welcomes you to join us on a journey of discovery, adventure, and
            connection. Let's redefine travel together."
          </ul>
        </div>
      </div>

      <MDBFooter
        style={{ backgroundColor: "#002D62", color: "white" }}
        className="text-center text-lg-start text-muted"
      >
        <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom ">
          <div className="me-5 d-none d-lg-block">
            <span>Get connected with us on social networks:</span>
          </div>

          {/* <div className="text-light" style={{ color: "white" }}>
            <a style={{ color: "white" }} href="" className="me-4 text-reset">
              <MDBIcon color="secondary" fab icon="facebook-f" />
            </a>
            <a style={{ color: "white" }} href="" className="me-4 text-reset">
              <MDBIcon color="secondary" fab icon="twitter" />
            </a>
            <a style={{ color: "white" }} href="" className="me-4 text-reset">
              <MDBIcon color="secondary" fab icon="google" />
            </a>
            <a style={{ color: "white" }} href="" className="me-4 text-reset">
              <MDBIcon color="secondary" fab icon="instagram" />
            </a>
            <a style={{ color: "white" }} href="" className="me-4 text-reset">
              <MDBIcon color="secondary" fab icon="linkedin" />
            </a>
            <a style={{ color: "white" }} href="" className="me-4 text-reset">
              <MDBIcon color="secondary" fab icon="github" />
            </a>
          </div> */}
        </section>

        <section className="">
          <MDBContainer className="text-center text-md-start mt-5">
            <MDBRow className="mt-3">
              <MDBCol md="3" lg="4" xl="3" className="mx-auto mb-4">
                <h6
                  style={{ color: "white" }}
                  className="text-uppercase fw-bold mb-4"
                >
                  <MDBIcon color="secondary" icon="gem" className="me-3" />
                  Company name
                </h6>
                <p style={{ color: "white" }}>
                  Here you can use rows and columns to organize your footer
                  content. Lorem ipsum dolor sit amet, consectetur adipisicing
                  elit.
                </p>
              </MDBCol>

              <MDBCol md="2" lg="2" xl="2" className="mx-auto mb-4">
                <h6  style={{ color: "white" }} className="text-uppercase fw-bold mb-4">Products</h6>
                <p>
                  <a style={{ color: "white" }} href="#!">
                    Angular
                  </a>
                </p>
                <p>
                  <a style={{ color: "white" }} href="#!">
                    React
                  </a>
                </p>
                <p>
                  <a style={{ color: "white" }} href="#!">
                    Vue
                  </a>
                </p>
                <p>
                  <a style={{ color: "white" }} href="#!">
                    Laravel
                  </a>
                </p>
              </MDBCol>

              <MDBCol md="3" lg="2" xl="2" className="mx-auto mb-4">
                <h6
                  style={{ color: "white" }}
                  className="text-uppercase fw-bold mb-4"
                >
                  Useful links
                </h6>
                <p>
                  <a style={{ color: "white" }} href="#!">
                    Pricing
                  </a>
                </p>
                <p>
                  <a style={{ color: "white" }} href="#!">
                    Settings
                  </a>
                </p>
                <p>
                  <a style={{ color: "white" }} href="#!">
                    Orders
                  </a>
                </p>
                <p>
                  <a style={{ color: "white" }} href="#!">
                    Help
                  </a>
                </p>
              </MDBCol>

              <MDBCol md="4" lg="3" xl="3" className="mx-auto mb-md-0 mb-4">
                <h6
                  style={{ color: "white" }}
                  className="text-uppercase fw-bold mb-4"
                >
                  Contact
                </h6>
                <p style={{ color: "white" }}>
                  <h5
                    style={{ color: "white" }}
                    color="light"
                    icon="home"
                    className="me-2"
                  />
                  New York, NY 10012, US
                </p>
                <p style={{ color: "white" }}>
                  <h5
                    style={{ color: "white" }}
                    icon="envelope"
                    className="me-3"
                  />
                  info@example.com
                </p>
                <p style={{ color: "white" }}>
                  <h5
                    style={{ color: "white" }}
                    icon="phone"
                    className="me-3"
                  />{" "}
                  + 01 234 567 88
                </p>
                <p style={{ color: "white" }}>
                  <MDBIcon
                    style={{ color: "white" }}
                    icon="print"
                    className="me-3"
                  />{" "}
                  + 01 234 567 89
                </p>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </section>

        <div
          className="text-center p-4"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.05)",color:'white' }}
        >
          © 2021 Copyright:
          <a style={{ color: "white" }} href="https://mdbootstrap.com/">
            MDBootstrap.com
          </a>
        </div>
      </MDBFooter>
    </>
  );
}
