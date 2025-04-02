import Home from "./pages/Home";
import './App.css';
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import PaymentDetails from "./pages/PaymentDetails";
import ExclusiveContent from "./pages/ExclusiveContent";

function App() {
  
  return (
    <>
      <Navbar />
    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/payment" element={<PaymentDetails />} ></Route>
        <Route path="/exclusive" element={<ExclusiveContent />} ></Route>
      </Routes>
     
    </>
  );
}

export default App;
