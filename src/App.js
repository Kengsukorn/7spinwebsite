import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HeaderManu from "./componant/HeaderManu";
import Home from "./componant/Home";
import About from "./componant/About";
import Business from "./componant/Business";
import ProductServices from "./componant/ProductServices";
import InvestorRelations from "./componant/InvestorRelations";
import News from "./componant/News";
import Career from "./componant/Career";
import Contact from "./componant/Contact";
import Page404 from "./componant/Page404";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import PrivacyPolicy from "./componant/PrivacyPolicy";




function App() {
   return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HeaderManu />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="business" element={<Business />} />
          <Route path="productservices" element={<ProductServices />} />
          <Route path="investorrelations" element={<InvestorRelations />} />
          <Route path="news" element={<News />} />
          <Route path="career" element={<Career />} />
          <Route path="contact" element={<Contact />} />
          <Route path="privacypolicy" element={<PrivacyPolicy />} />
          <Route path="*" element={<Page404 />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
