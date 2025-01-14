import Home from "./pages/Home";
import './App.css';
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import PaymentDetails from "./pages/PaymentDetails";

function App() {
  
  return (
    <>
      <Navbar />
    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/payment" element={<PaymentDetails />} ></Route>
        {/* <Route path="/coin" element={<Coin />}>
          <Route path=":coinId" element={<Coin />}></Route>
        </Route> */}
      </Routes>
     
    </>
  );
}

export default App;
