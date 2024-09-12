import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./pages/Home";
import PropertyDetails from "./pages/PropertyDetails";

export default function App() {
  return (
    <div className="bg-gray-100 max-w-[1440px] mx-auto">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/property/:id" element={<PropertyDetails />} />
      </Routes>
      <Footer />
    </div>
  );
}
