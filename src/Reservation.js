import React, { useEffect, useState } from "react";
import Heading from "./Heading";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./style.css";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Swal from "sweetalert2";
import Popup from "reactjs-popup";
import {
  MDBFooter,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
} from "mdb-react-ui-kit";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import { colors } from "@mui/material";

export default function Reservation() {
  const [arrivalLocation, setArrivalLocation] = useState("");
  const [depatureLocation, setdepartureLocation] = useState("");
  const [date, setDate] = useState("");
  const [filteredTrains, setFilteredTrains] = useState([]);
  const [selectedRow, setSelectedRow] = useState(null);
  const [data, setData] = useState([]);
  const [selectedTrainData, setSelectedTrainData] = useState(null);
  const [open, setOpen] = useState(false);

  const [bookPrice, setBookPrice] = useState("");

  const handleClose = () => {
    setOpen(false);
  };

  const submitAlert = (event) => {
    event.preventDefault();
    setOpen(true);
  };

  useEffect(() => {
    fetchTrainData();
  }, []);

  const fetchTrainData = async () => {
    try {
      const response = await fetch("http://localhost:5045/api/User");
      const data = await response.json();
      setData(data);
    } catch (error) {
      console.error("Error fetching train data:", error);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    fetch(
      `http://localhost:5045/api/User/detail?arrivalLocation=${arrivalLocation}&depatureLocation=${depatureLocation}&date=${date}`
    )
      .then((res) => res.json())
      .then((data) => {
        setFilteredTrains(data);
        setSelectedRow(null);
      })
      .catch((error) => console.error("Error:", error));
  };

  const handleBook = (train) => {
    setSelectedTrainData(train);
  };

  return (
    <>
      <Heading />

      <div
        style={{
          display: "flex",
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
        }}
        className="box"
      >
        <Form
          onSubmit={handleFormSubmit}
          style={{
            width: "500px",
            margin: "2rem auto",
            padding: "1rem",
            border: "1px solid black",
            borderRadius: "10px",
            alignItems: "center",
            justifyContent: "center",
            gap: "1rem",
          }}
        >
          <h3 className="text-center ">Search Train</h3>

          <Form.Group className="mb-3 " controlId="arrivalLocation">
            <Form.Label>Arrival Location</Form.Label>
            <Form.Select
              value={arrivalLocation}
              onChange={(e) => setArrivalLocation(e.target.value)}
            >
              <option>From</option>
              {data.map((detail) => {
                return (
                  <option key={detail.id}>{detail.arrivalLocation}</option>
                );
              })}
            </Form.Select>
          </Form.Group>
          <Form.Group className="mb-3" controlId="departureLocation">
            <Form.Label>Departure Location</Form.Label>
            <Form.Select
              value={depatureLocation}
              onChange={(e) => setdepartureLocation(e.target.value)}
            >
              <option value="">To</option>
              {data.map((detail) => {
                return (
                  <option key={detail.id}>{detail.depatureLocation}</option>
                );
              })}
            </Form.Select>
          </Form.Group>
          <Form.Group className="mb-3" controlId="date">
            <Form.Label>Date</Form.Label>
            <Form.Control
              type="date"
              name="date"
              onChange={(e) => setDate(e.target.value)}
            />
          </Form.Group>

          <Button
            style={{ backgroundColor: "#002D62", width: "100%" }}
            type="submit"
          >
            Submit
          </Button>
        </Form>
        {filteredTrains && (
          <>
            {filteredTrains.map((datas) => {
              return (
                <>
                  <div
                    style={{
                      backgroundColor: "#002D62",
                      position: "absolute",
                      width: "500px",
                      padding: "1.4rem",
                      height: "400px",
                      color: "white",
                      display: "flex",
                      flexFlow: "column",
                      justifyContent: "center",
                      borderRadius: "10px",
                    }}
                    key={datas.id}
                  >
                    <h2 style={{ margin: "0.4rem 0" }}>
                      From: {datas.arrivalLocation}
                    </h2>
                    <h2 style={{ margin: "0.4rem 0" }}>
                      To: {datas.depatureLocation}
                    </h2>
                    <h2 style={{ margin: "0.4rem 0" }}>Date: {datas.date}</h2>
                    <h2 style={{ margin: "0.4rem 0" }}>Price: {datas.price}</h2>
                    <Button
                      style={{ margin: "2rem 0.3rem", width: "100%" }}
                      variant="info"
                      onClick={() => handleBook(datas)}
                    >
                      Book Ticket Confirm
                    </Button>
                  </div>
                </>
              );
            })}
          </>
        )}
      </div>
      {selectedTrainData && (
        <>
          <Form
            style={{
              maxWidth: "500px",
              margin: "1rem auto",
              border: "1px solid gray",
              width: "500px",
              padding: "1.4rem",
              borderRadius: "10px",
            }}
            onSubmit={submitAlert}
          >
            <div>
              <h1>
                {selectedTrainData.arrivalLocation} to{" "}
                {selectedTrainData.depatureLocation}{" "}
              </h1>
            </div>
            <Form.Group className="mb-3" controlId="date">
              <Form.Label>Date</Form.Label>
              <Form.Control
                type="text"
                value={selectedTrainData ? selectedTrainData.date : ""}
                readOnly
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="date">
              <Form.Label>NIC number</Form.Label>
              <Form.Control type="number" required />
            </Form.Group>
            <Form.Group className="mb-3" controlId="date">
              <Form.Label>Full Name: </Form.Label>
              <Form.Control type="text" required />
            </Form.Group>
            <Form.Group className="mb-3" controlId="date">
              <Form.Label>Address</Form.Label>
              <Form.Control type="text" required />
            </Form.Group>
            <Form.Group className="mb-3" controlId="date">
              <Form.Label>Seats No</Form.Label>
              <Form.Control type="number" required max={5} min={0} />
            </Form.Group>
            {/* <Form.Group className="mb-3" controlId="date">
              <Form.Label>Ticket Price</Form.Label>
              <Form.Control
                type="text"
                value={selectedTrainData ? selectedTrainData.price : ""}
                readOnly
              />
            </Form.Group> */}
            <h2
              className="d-flex justify-content-between"
              style={{ color: "red" }}
            >
              <h2>Price:</h2>{" "}
              <h2> LKR{selectedTrainData ? selectedTrainData.price : ""}</h2>
            </h2>
            <Button variant="danger w-100" type="submit">
              Confirm Booking
            </Button>
          </Form>
        </>
      )}

      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <MuiAlert
          variant="filled"
          onClose={handleClose}
          severity="success"
          sx={{ width: "100%", height: "60px", fontSize: "1.4rem" }}
        >
          Train Booked successfully!
        </MuiAlert>
      </Snackbar>
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
                <h6
                  style={{ color: "white" }}
                  className="text-uppercase fw-bold mb-4"
                >
                  Products
                </h6>
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
          style={{ backgroundColor: "rgba(0, 0, 0, 0.05)", color: "white" }}
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
