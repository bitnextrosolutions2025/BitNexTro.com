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
import Contactpage from './pages/Contactpage';
import Aboutpage from './pages/Aboutpage';
import Privacypolicy from './pages/Privacypolicy';
import Termspage from './pages/Termspage';
import Refund from './pages/Refund';
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
          <Route path='/contact' element={<Contactpage />} />
          <Route path='/about' element={<Aboutpage />} />
          <Route path='/privacy' element={<Privacypolicy />} />
          <Route path='/terms' element={<Termspage />} />
          <Route path='/refund' element={<Refund />} />
          <Route path='/service/hardware-services-kolkata' element={<HardwareSupport />} />
          <Route path='/service/network-setup-kolkata' element={<Network />} />
          <Route path='/service/data-backup-disaster-recovery' element={<Databackup />} />
          <Route path='/service/cloud-services-kolkata' element={<Cloudservice />} />
          <Route path='/service/managed-services-kolkata' element={<Managedservice />} />
          <Route path='/service/cyber-security-services-kolkata' element={<Cybersecurity />} />
          <Route path='/service/remote-services-kolkata' element={<Remote />} />
          <Route path='/service/website-services-kolkata' element={<Websitedev />} />
          <Route path='/service/artifical-services-kolkata' element={<Artifical />} />
          <Route path='/service/devops-services-kolkata' element={<Devops />} />
          <Route path='/service/digital-services-kolkata' element={<Digital />} />
          <Route path='/service/it-amc-services-kolkata' element={<Amc />} />
          <Route path='/service/server-support-kolkata' element={<Servervirtual />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
