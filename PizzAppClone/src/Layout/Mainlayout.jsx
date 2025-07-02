import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

export default function Mainlayout() {
  return (
    <>
      <Navbar />
      <main className="h-dvh w-full max-w-3xl mx-auto">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
