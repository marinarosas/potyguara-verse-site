'use client'

import ProductCategory from "@/components/Store/productCategoryLine"
import { StoreHighlight } from "@/components/Store/storeHighlight"

export default function Store(){
    return(
       <div className="p-16 lg:p-8">
        <StoreHighlight/>
        <ProductCategory/>
       </div>
    )
}