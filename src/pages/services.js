import Footer from '@/components/Layout/Footer'
import Newsletter from '@/components/Layout/Newsletter'
import Blocks from '@/components/Services/Blocks'
import Design from '@/components/Services/Design'
import Engineering from '@/components/Services/Engineering'
import Hero from '@/components/Services/Hero'
import Marketing from '@/components/Services/Marketing'
import Navbar from '@/components/Services/Navbar'
import Specialist from '@/components/Services/Specialist'
import React from 'react'

const ServicesPage = () => {
    return (
        <div>
            <div>
                <Navbar />
                <Hero />
                <Blocks />
                <Specialist />
                <Engineering />
                <Design />
                <Marketing />
                <Newsletter />
                <Footer />
            </div>
        </div>
    )
}

export default ServicesPage