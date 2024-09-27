'use client'

import ProductCategory from '@/components/Store/productCategoryLine'
import { StoreHighlight } from '@/components/Store/storeHighlight'

export default function Store() {
  return (
    <div className="p-16 lg:p-8">
      <StoreHighlight />
      <ProductCategory />

      <div
        className="border-2 border-orange-600 bg-blue-500 h-48 rounded-2xl "
        style={{
          clipPath: 'polygon(12% 0%, 100% 0%, 100% 100%, 0% 100%, 0% 32%)',
          border: '2px solid orange',
          borderRadius: '16px',
        }}
      >
        <h1>titulo</h1>
        <p>conteudo escrito</p>
      </div>
    </div>
  )
}
