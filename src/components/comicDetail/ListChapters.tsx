'use client'

import Link from 'next/link'
import React, { FC, useState } from 'react'
import { paginateArray } from '../../utils/paginateArray';

interface listChapterProps {
    data: {
        id: number
        name: string
    }[]
    paramsCurrent: string
}

const itemsPerPage = 50; // Số lượng mục trên mỗi trang

const ListChapters: FC<listChapterProps> = ({ data, paramsCurrent }) => {
    const [pageNumber, setPageNumber] = useState<number>(1);
    const paginatedItems = paginateArray(data, pageNumber, itemsPerPage);


    const totalPages = Math.ceil(data.length / itemsPerPage);


    const handleNextPage = () => {
        if (pageNumber < totalPages) {
            setPageNumber(pageNumber + 1);
        }
    };

    const handlePrevPage = () => {
        if (pageNumber > 1) {
            setPageNumber(pageNumber - 1);
        }
    };

    return (
        <React.Fragment>
            <div className='my-6'>
                <button onClick={handlePrevPage} disabled={pageNumber === 1}>Trang trước</button>
                <button onClick={handleNextPage} disabled={pageNumber === totalPages}>Trang sau</button>
            </div>
            <div className='grid md:grid-cols-2 grid-cols-1 md:gap-4 gap-2'>
                {paginatedItems.map((item, index) => (
                    <Link
                        key={index}
                        href={`/truyen/${paramsCurrent}/${item.id.toString()}`}
                        className='flex items-center justify-start w-full border-2 border-slate-300 rounded-md md:p-3 p-2 
                        font-semibold text-slate-600 lg:hover:bg-[#ffe5a1] transition-all duration-200'
                    >
                        {item.name}
                    </Link>
                ))}
            </div>
        </React.Fragment>
    )
}

export default ListChapters