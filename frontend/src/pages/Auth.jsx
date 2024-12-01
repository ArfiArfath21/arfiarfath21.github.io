import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import LoginForm from "../components/LoginForm";

// const isLoggedIn = false;
const isRegistered = false;

function Auth() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Navbar />
      <section className="my-5 align-middle my-auto">
        <div className="container col-lg-4 col-md-6 col-sm-12 text-center">
          {isRegistered ? <LoginForm  isRegistered={isRegistered} /> : <LoginForm text="Register" isRegistered={isRegistered} /> }
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Auth;
// {isLoggedIn ? <h1>Hello User!</h1> : <Login />}
