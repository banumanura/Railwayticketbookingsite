import React from "react";
import Heading from "./Heading";
import "./style.css";
import log from "./images/Sri_Lanka_Railway_logo.png";
import {
  MDBFooter,
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBIcon,
  MDBBtn,
} from "mdb-react-ui-kit";
import { useNavigate } from "react-router-dom";

export default function Main() {
  const direct = useNavigate();
  return (
    <>
      <Heading />
      <main role="main">
        <div className="jumbotron">
          <div className="container-fluid background_wall p-4 d-flex align-items-center justify-content-center">
            <h1
              style={{ fontWeight: "500" }}
              className="display-3 text-center text-light"
            >
              Welcome To Sri Lanka Railways !
            </h1>
          </div>
        </div>
      </main>
      <div className="px-4 py-5 my-5 text-center">
        <img className="d-block mx-auto mb-4" src={log} alt="" />
        <h1 className="display-5 fw-bold">Sri Lanka Railways</h1>
        <div className="col-lg-6 mx-auto">
          <p className="lead mb-4">
            "Railway Sri Lanka: Your gateway to efficient and scenic travel
            across the island nation's picturesque landscapes, offering safe and
            reliable railway services connecting cities, towns, and cultural
            landmarks."
          </p>
          <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
            <button
              onClick={() => {
                direct("/book-train");
              }}
              className="button "
              style={{ backgroundColor: "#002D62", border: "none" }}
            >
              Book Seat Now
            </button>
          </div>
        </div>
      </div>

      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "20px" }}>
        <h1 style={{ textAlign: "center" }}>Sri Lanka Railway Tracker</h1>
        <p style={{ textAlign: "center" }}>
          Sri Lanka Railways offers a network of train routes that connect
          various cities and regions across the country, offering scenic views
          and convenient transportation options for travelers. Here is a list of
          some of the notable train routes operated by Sri Lanka Railways:
        </p>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-around",
          }}
        >
          <div
            style={{
              width: "300px",
              margin: "20px",
              backgroundColor: "#fff",
              borderRadius: "10px",
              boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
            }}
          >
            <h2
              style={{
                backgroundColor: "#002D62",
                color: "#fff",
                padding: "10px",
                textAlign: "center",
                borderTopLeftRadius: "10px",
                borderTopRightRadius: "10px",
              }}
            >
              Colombo to Kandy
            </h2>
            <p style={{ padding: "10px" }}>
              This scenic train route takes travelers from the bustling city of
              Colombo to the picturesque hill city of Kandy, passing through
              lush greenery, tea plantations, and beautiful landscapes along the
              way.
            </p>
            <p style={{ padding: "10px" }}>Stations: Colombo Fort, Kandy</p>
          </div>
          <div
            style={{
              width: "300px",
              margin: "20px",
              backgroundColor: "#fff",
              borderRadius: "10px",
              boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
            }}
          >
            <h2
              style={{
                backgroundColor: "#002D62",
                color: "#fff",
                padding: "10px",
                textAlign: "center",
                borderTopLeftRadius: "10px",
                borderTopRightRadius: "10px",
              }}
            >
              Colombo to Galle
            </h2>
            <p style={{ padding: "10px" }}>
              This coastal train route offers stunning views of the Indian Ocean
              as it travels from Colombo to the historic city of Galle.
              Passengers can enjoy scenic views of beaches, palm trees, and
              coastal villages along the way.
            </p>
            <p style={{ padding: "10px" }}>Stations: Colombo Fort, Galle</p>
          </div>
          <div
            style={{
              width: "300px",
              margin: "20px",
              backgroundColor: "#fff",
              borderRadius: "10px",
              boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
            }}
          >
            <h2
              style={{
                backgroundColor: "#002D62",
                color: "#fff",
                padding: "10px",
                textAlign: "center",
                borderTopLeftRadius: "10px",
                borderTopRightRadius: "10px",
              }}
            >
              Colombo to Badulla
            </h2>
            <p style={{ padding: "10px" }}>
              This scenic train journey takes passengers from Colombo to
              Badulla, traversing through the scenic hill country of Sri Lanka.
              Travelers can enjoy breathtaking views of mountains, waterfalls,
              and tea estates along the way.
            </p>
            <p style={{ padding: "10px" }}>Stations: Colombo Fort, Badulla</p>
          </div>
        </div>
      </div>
      <div
        style={{ maxWidth: "1000px" }}
        class="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center"
      >
        <h2 style={{ fontWeight: "400" }} class="display-4">
          Ticket Pricing
        </h2>
        <p class="lead">
          Explore the fare options for passenger services offered by the Sri
          Lanka Railway Department. Choose the best ticket option that suits
          your travel needs.
        </p>
      </div>

      <div style={{ maxWidth: "1000px" }} class="container">
        <div
          style={{ gap: "2rem" }}
          class="card-deck mb-3 text-center d-flex justify-content-center "
        >
          <div style={{ width: "400px" }} class="card mb-4 box-shadow">
            <div class="card-header">
              <h4>Passenger Services</h4>
            </div>
            <div class="card-body">
              <h2 class="card-title pricing-card-title">
                Affordable fares <small class="text-muted"></small>
              </h2>
              <ul class="list-unstyled mt-3 mb-4">
                <li>Commuter trains</li>
                <li>Intercity trains</li>
                <li>Comfortable travel experience</li>
                <li>Convenient schedules</li>
              </ul>
              <a
                style={{ backgroundColor: "#002D62", color: "white" }}
                href="#"
                class="btn btn-lg btn-block "
              >
                View Passenger Services
              </a>
            </div>
          </div>
          <div style={{ width: "400px" }} class="card mb-4 box-shadow">
            <div class="card-header">
              <h4 class="my-0 font-weight-normal">Freight Transportation</h4>
            </div>
            <div class="card-body">
              <h2 class="card-title pricing-card-title">
                Efficient logistics <small class="text-muted"></small>
              </h2>
              <ul class="list-unstyled mt-3 mb-4">
                <li>Freight trains</li>
                <li>Reliable cargo transportation</li>
                <li>Large capacity for goods</li>
                <li>Competitive pricing</li>
              </ul>
              <a
                style={{ backgroundColor: "#002D62", color: "white" }}
                href="#"
                class="btn btn-lg btn-block "
              >
                Learn about Freight Services
              </a>
            </div>
          </div>
          <div style={{ width: "400px" }} class="card mb-4 box-shadow">
            <div class="card-header">
              <h4 class="my-0 font-weight-normal">
                Infrastructure Development
              </h4>
            </div>
            <div class="card-body">
              <h2 class="card-title pricing-card-title">
                Modern facilities <small class="text-muted"></small>
              </h2>
              <ul class="list-unstyled mt-3 mb-4">
                <li>Continuous upgrades</li>
                <li>Maintenance of tracks and stations</li>
                <li>Enhanced passenger experience</li>
                <li>Safe and reliable travel</li>
              </ul>
              <a
                style={{ backgroundColor: "#002D62", color: "white" }}
                href="#"
                class="btn btn-lg btn-block "
              >
                Explore Infrastructure
              </a>
            </div>
          </div>
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
