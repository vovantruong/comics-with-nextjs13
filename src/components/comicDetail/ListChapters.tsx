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
        <div>
            <div>
                <button onClick={handlePrevPage} disabled={pageNumber === 1}>Trang trước</button>
                <button onClick={handleNextPage} disabled={pageNumber === totalPages}>Trang sau</button>
            </div>
            <div className='flex items-center flex-wrap'>
                {paginatedItems.map((item, index) => (
                    <Link key={index} className='block w-[50%]' href={`/truyen/${paramsCurrent}/${item.id.toString()}`}>
                        {item.name}
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default ListChapters