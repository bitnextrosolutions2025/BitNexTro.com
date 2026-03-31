import { useState, lazy, Suspense } from 'react'
import './App.css'
import HomePage from './components/Home'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async'

import { Flip, ToastContainer } from 'react-toastify'

// Lazy load all service and utility pages
const Career = lazy(() => import('./pages/Career'));
const Contactpage = lazy(() => import('./pages/Contactpage'));
const Aboutpage = lazy(() => import('./pages/Aboutpage'));
const Privacypolicy = lazy(() => import('./pages/Privacypolicy'));
const Termspage = lazy(() => import('./pages/Termspage'));
const Refund = lazy(() => import('./pages/Refund'));
const HardwareSupport = lazy(() => import('./components/Hardware'));
const Network = lazy(() => import('./pages/Network'));
const Databackup = lazy(() => import('./pages/Databackup'));
const Cloudservice = lazy(() => import('./pages/Cloudservice'));
const Managedservice = lazy(() => import('./pages/Managedservice'));
const Cybersecurity = lazy(() => import('./pages/Cybersecurity'));
const Remote = lazy(() => import('./pages/Remote'));
const Websitedev = lazy(() => import('./pages/Websitedev'));
const Artifical = lazy(() => import('./pages/Artifical'));
const Devops = lazy(() => import('./pages/Devops'));
const Digital = lazy(() => import('./pages/Digital'));
const Amc = lazy(() => import('./pages/Amc'));
const Servervirtual = lazy(() => import('./pages/Servervirtual'));
const Blog = lazy(() => import('./pages/Blog'));
const DetailBlogPage = lazy(() => import('./pages/DetailBlogPage'));

// Loading fallback component
const LoadingFallback = () => (
  <div className="flex items-center justify-center min-h-screen bg-linear-to-br from-gray-900 via-gray-900 to-gray-800">
    <div className="text-center">
      <div className="inline-block animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-cyan-400 mb-4"></div>
      <p className="text-white text-lg font-semibold">Loading...</p>
    </div>
  </div>
);


function App() {

  return (
    <>
      <HelmetProvider>
        <BrowserRouter>
          <Navbar />
          <ToastContainer transition={Flip} />
          <Suspense fallback={<LoadingFallback />}>
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
            <Route path='/blog' element={<Blog />} />
            <Route path='/blog/:id' element={<DetailBlogPage />} />
          </Routes>
        </Suspense>
        <Footer />
      </BrowserRouter>
      </HelmetProvider>
    </>
  )
}

export default App
