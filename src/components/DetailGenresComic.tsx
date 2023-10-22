'use client'
import { comicsProps } from '@/types/typeProps'
import { FC, useEffect, useState } from 'react'
import useSWR, { mutate } from 'swr'
import CardComic from './CardComic'
import Pagination from './Pagination'
import Skeleton from 'react-loading-skeleton'
import { useRouter } from 'next/navigation'

interface DetailGenresComicProps {
    type: string
    page: string
}

interface dataComiscProps {
    comics: Object[]
    total_pages: number
    current_page: number
}

const DetailGenresComic: FC<DetailGenresComicProps> = ({ page, type }) => {
    const [shouldRunEffect, setShouldRunEffect] = useState<boolean>(false);
    const [loadingPage, setLoadingPage] = useState<boolean>(false)
    const router = useRouter()


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
    }, [type, page, typeof window !== "undefined" ? window.location.pathname : null])

    useEffect(() => {
        if (typeof window !== "undefined") {
            if (window.location.search === "") {
                router.push('?type=all')
            }
        }
    }, [])

    useEffect(() => {
        mutate({ ...data })
    }, [type])

    useEffect(() => {

    }, [type])

    const handleChangePage = (data: { selected: number }) => {
        let numberPage = data.selected + 1
        router.push(`/the-loai?type=${type}&page=${numberPage}`)
    }

    return (
        <div className='relative bg-white py-3'>
            <div className='flex items-start justify-start flex-wrap'>
                {(data?.comics && data?.comics.length > 0) && (!isLoading) ? data?.comics.map((item: comicsProps) => (
                    <div className='2xl:w-1/6 xl:w-1/5 lg:w-1/4 w-1/3 md:pb-6 pb-3 lg:px-3 md:px-2 px-1 lg:h-[360px] sm:h-[280px] h-[185px]' key={item.id}>
                        <CardComic type='normal' data={item} />
                    </div>
                )) : (
                    Array.from(Array(12).keys()).map(item => (
                        <div key={item} className='2xl:w-1/6 xl:w-1/5 lg:w-1/4 w-1/3 md:pb-6 pb-3 lg:px-3 md:px-2 px-1 lg:h-[360px] sm:h-[280px] h-[185px]'>
                            <Skeleton containerClassName='w-full h-full flex' />
                        </div>
                    ))
                )}
            </div>
            {!isLoading && <Pagination totalPage={data?.total_pages} data={data?.comics} handlePageClick={handleChangePage} />}
        </div>
    )
}
export default DetailGenresComic