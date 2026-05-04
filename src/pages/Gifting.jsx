import React from 'react'
import GiftingSetsHero from '../components/gifting/GiftingSetsHero'

import GiftClosing from '../components/gifting/GiftClosing'
import FeaturedProducts from '../components/gifting/FeaturedProducts'

export default function Gifting() {
  return (
    <div>
        <GiftingSetsHero />
        <FeaturedProducts/>
        <GiftClosing/>
    </div>
  )
}