import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import UserList from "../components/UserList";


export default function Home() {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div>
        <UserList/>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
