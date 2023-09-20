'use client'

import { MediaQueryContext } from '@/contexts/MediaQueryContext';
import React, { useContext } from 'react'

const CategoryMobile = () => {

    const { md } = useContext(MediaQueryContext);

    // if (!md) {
    //     return
    // }

    return md && (
        <div>Category Mobile</div>
    )
}

export default CategoryMobile