import React from 'react'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import HeroSection from '@/components/HeroSection';
function page() {
  return (
    <div className='flex flex-col gap-10 bg-[#E5E5E5]'>
        <HeroSection />
        <Contact /> 
        <Footer />
    </div>
  )
}

export default page;