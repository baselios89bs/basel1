import LogoName from "./component/LogoName";
import React from "react";
import NavBar from "./component/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Mobiles from "./component/pages/Mobiles";
import Footer from "./component/Footer";


function App() {

  return (
    <div className="App">
   
      
       <BrowserRouter>
      <LogoName />
      <NavBar />
      <Home />
       <Routes>
       
       <Route path="/mobile" element={<Mobiles />} />
       </Routes>
       <Footer />
     </BrowserRouter>
      
    </div>
  );
}

export default App;
