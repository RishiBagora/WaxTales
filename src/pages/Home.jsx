import React from 'react'
import Hero from '../components/home/Hero'
import Collections from '../components/home/Collections'
import FeaturedProducts from '../components/home/FeaturedProducts'
import BrandStory from '../components/home/BrandStory'
import CustomCTA from '../components/home/CustomCTA'
import WhyChooseUs from '../components/home/WhyChooseUs'
import InstagramGrid from '../components/home/InstagramGrid'
import Testimonials from '../components/home/Testimonials'
import StripSection from '../components/home/StripSection'
import GiftingSection from '../components/home/GiftingSection'
import WeddingSection from '../components/home/WeddingSection'
const Home = () => {
  return (
    <div>
        <Hero/>
        <Collections/>
        <FeaturedProducts/>
        <GiftingSection/>
        <StripSection/>
        <WeddingSection/>
        <BrandStory/>
        <CustomCTA/>
        <WhyChooseUs/>
        <InstagramGrid/>
        <Testimonials/>
    </div>
  )
}

export default Home 