import React from "react";
import Navbar from "../components/Navbar";
import StayTuned from "../components/StayTuned";
import Footer from "../components/Footer";

function Contact() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Navbar />
      <section className="my-auto">
        <StayTuned />
      </section>
      <Footer />
    </div>
  );
}

export default Contact;
