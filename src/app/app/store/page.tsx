'use client'

import ProductCarouselLine from '@/components/ProductsCarousel'
import { StoreHighlight } from './storeHighlight'

export default function Store() {
  return (
    <div className="flex flex-col gap-8 bg-background pt-8x mx-8">
      <StoreHighlight />
      <ProductCarouselLine />
    </div>
  )
}
