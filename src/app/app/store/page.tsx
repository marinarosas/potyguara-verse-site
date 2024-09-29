'use client'

import ProductCategory from '@/components/Store/productCategoryLine'
import { StoreHighlight } from '@/components/Store/storeHighlight'

export default function Store() {
  return (
    <div className="flex flex-col gap-4 bg-background">
      <StoreHighlight />
      <ProductCategory />
    </div>
  )
}
