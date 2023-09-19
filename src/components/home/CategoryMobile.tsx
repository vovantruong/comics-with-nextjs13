
'use client'
import { MediaQueryContext } from '@/contexts/MediaQueryContext';
import React, { useContext } from 'react'

const CategoryMobile = () => {

    const { md } = useContext(MediaQueryContext);

    if (!md) {
        return null
    }

    return (
        <div className='my-4 px-2'>CategoryMobile</div>
    )
}

export default CategoryMobile