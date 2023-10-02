'use client'
import { comicsProps } from '@/types/typeProps'
import { FC, useEffect, useState } from 'react'
import useSWR, { mutate } from 'swr'
import CardComic from './CardComic'
import Pagination from './Pagination'

interface DetailGenresComicProps {
    type: string
    page: string
}

const DetailGenresComic: FC<DetailGenresComicProps> = ({ page, type }) => {
    const [shouldRunEffect, setShouldRunEffect] = useState<boolean>(false);

    const fetcherComicByGenres = (url: string, headerValue: any) => fetch(url, {
        method: 'POST',
        body: JSON.stringify(headerValue)
    }).then(res => res.json())

    const { data, isLoading, mutate } = useSWR(`/api/genres-detail`, url => fetcherComicByGenres(url, { page: page, type: type }), {
        revalidateIfStale: false,
        revalidateOnFocus: false,
        revalidateOnReconnect: false,
    })

    useEffect(() => {
        if (shouldRunEffect) {
            mutate({ ...data })
        } else {
            setShouldRunEffect(true);
        }
    }, [type, page])

    return (
        <div className='relative'>
            <div className='flex items-start justify-start flex-wrap'>
                {(data && data.length > 0) && (!isLoading) && data.map((item: comicsProps) => (
                    <div className='2xl:w-1/6 xl:w-1/5 lg:w-1/4 w-1/3 md:pb-6 pb-3 lg:px-3 md:px-2 px-1 lg:h-[360px] sm:h-[280px] h-[185px]' key={item.id}>
                        <CardComic type='normal' data={item} />
                    </div>
                ))}
            </div>
            <Pagination />
        </div>
    )
}
export default DetailGenresComic