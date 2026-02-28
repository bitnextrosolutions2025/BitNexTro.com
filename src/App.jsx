import { useState } from 'react'
import './App.css'
import HomePage from './components/Home'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Career from './pages/Career';

import { Flip, ToastContainer } from 'react-toastify'
import PdfUpload from './components/PdfUpload';
import LoginComponent from './components/Login';
import Contactpage from './pages/Contactpage';
import Aboutpage from './pages/Aboutpage';
import Privacypolicy from './pages/Privacypolicy';
import Termspage from './pages/Termspage';
import Servicepage from './pages/Servicepage';
import Refund from './pages/Refund';
import Background from './pages/Background';
import HardwareSupport from './components/Hardware';
import Network from './pages/Network'
import Databackup from './pages/Databackup'
import Cloudservice from './pages/Cloudservice'
import Managedservice from './pages/Managedservice'
import Cybersecurity from './pages/Cybersecurity'
import Remote from './pages/Remote'
import Websitedev from './pages/Websitedev'
import Artifical from './pages/Artifical'
import Devops from './pages/Devops'
import Digital from './pages/Digital'
import Amc from './pages/Amc'
import Servervirtual from './pages/Servervirtual'


function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <ToastContainer transition={Flip} />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/career' element={<Career />} />
          <Route path='/Pdf' element={<PdfUpload />} />
          <Route path='/login' element={<LoginComponent />} />
          <Route path='/contact' element={<Contactpage />} />
          <Route path='/about' element={<Aboutpage />} />
          <Route path='/privacy' element={<Privacypolicy />} />
          <Route path='/terms' element={<Termspage />} />
          <Route path='/service' element={<Servicepage />} />
          <Route path='/refund' element={<Refund />} />
          <Route path='/b' element={<Background />} />
          <Route path='/hardware' element={<HardwareSupport />} />
          <Route path='/network' element={<Network />} />
          <Route path='/databackup' element={<Databackup />} />
          <Route path='/cloudservice' element={<Cloudservice />} />
          <Route path='/managedservice' element={<Managedservice />} />
          <Route path='/cybersecurity' element={<Cybersecurity />} />
          <Route path='/remote' element={<Remote />} />
          <Route path='/website' element={<Websitedev />} />
          <Route path='/artifical' element={<Artifical />} />
          <Route path='/devops' element={<Devops />} />
          <Route path='/digital' element={<Digital />} />
           <Route path='/amc' element={<Amc />} />
             <Route path='/server' element={<Servervirtual />} />
          






        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
