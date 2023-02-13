import Features from '@/components/Innersevices/Features'
import Header from '@/components/Innersevices/Header'
import Technologies from '@/components/Innersevices/technologies'
import Footer from '@/components/Layout/Footer'
import Navbar from '@/components/Layout/Navbar'
import Newsletter from '@/components/Layout/Newsletter'
import React from 'react'

const innerservices = () => {
  return (
    <div>
        <Navbar />
        <Header />
        <Features />
        <Technologies />
        <Newsletter />
        <Footer />
    </div>
  )
}

export default innerservices