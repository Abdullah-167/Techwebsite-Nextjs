import ArticleCards from '@/components/Articles/ArticleCards'
import Hero from '@/components/Articles/Hero'
import Newsletter from '@/components/Articles/Newsletter'
import Footer from '@/components/Layout/Footer'
import Navbar from '@/components/Services/Navbar'
import React from 'react'

const article = () => {
  return (
    <div>
        <Navbar />
        <Hero />
        <Newsletter />
        <ArticleCards />
        <Newsletter />
        <Footer />
    </div>
  )
}

export default article