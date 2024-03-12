'use client'

import { singleComic } from '@/types/typeProps'
import React, { FC, useState } from 'react'
import ImageFallback from '../customs/ImageFallback'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import { getNextChapter, getPrevChapter } from '@/utils/nextprevchapter'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import LoadingPage from '../layout/LoadingPage'

interface dataProps {
    data: singleComic
    slug: string
    chapter: string
}

const NextPrevChapter: FC<dataProps> = ({ data, slug, chapter }) => {
    const [currentData, setCurrentData] = useState<singleComic>(data)
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const router = useRouter()

    const currentSlug = slug;
    const currentChapter = chapter;

    const dataChapter = currentData.chapters.slice().reverse()
    const currentIndex = dataChapter.findIndex(element => parseInt(element.id) === parseInt(currentChapter))

    const handleNextChapter = async () => {
        const nextChapter = dataChapter[currentIndex + 1]
        router.push(`/truyen/${currentSlug}/${nextChapter.id}`)
        setIsLoading(true)
        const { data, msg } = await getNextChapter(currentSlug, nextChapter)
        setIsLoading(false)
        if (data !== null) {
            setCurrentData(data)
        }

    }

    const handlePrevChapter = async () => {
        const prevChapter = dataChapter[currentIndex - 1]
        router.push(`/truyen/${currentSlug}/${prevChapter.id}`)
        setIsLoading(true)
        const { data, msg } = await getPrevChapter(currentSlug, prevChapter)
        setIsLoading(false)
        if (data !== null) {
            setCurrentData(data)
        }
    }

    // if (isLoading) return <LoadingPage />


    return (
        <React.Fragment>
            <div className='fixed top-0 left-0 select-none inset-x-0 bg-[rgba(0,0,0,0.61)] text-left py-3 px-2 text-gray-300 font-semibold duration-200 translate-y-0 opacity-1'>
                <div className='md:block hidden'>
                    <div className='flex items-center gap-4 md:flex-row flex-col'>
                        <Link
                            className='hover:text-secondary flex items-center gap-2 line-clamp-1'
                            href={`/truyen/${slug}`}>
                            <FaChevronLeft />{currentData.comic_name}
                        </Link>
                        <span className='md:block hidden'>-</span>
                        <span>{currentData.chapter_name}</span>
                    </div>
                </div>
                <div className='md:hidden block'>
                    <Link href={`/truyen/${slug}`} className='flex items-center gap-2'>
                        <FaChevronLeft /> Trở về
                    </Link>
                </div>
            </div>
            <div className='container'>
                <div className='md:hidden block mt-20'>
                    <h3 className='text-center font-bold text-lg bg-primary text-slate-700 rounded-md p-4 shadow-sm'>
                        {currentData.comic_name} <br /> <span className='text-yellow-700 uppercase pt-2 block'> {currentData.chapter_name}</span>
                    </h3>
                </div>
                <div className='text-center max-w-[42rem] mx-auto my-12'>
                    {currentData.images.map((item) => (
                        <ImageFallback
                            key={item.src}
                            src={item.src ? item.src : item.backup_src}
                            alt={item.src}
                            width={2048}
                            height={100}
                            className='w-full h-auto'
                        />
                    ))}
                </div>
            </div>
            <div className='fixed bottom-0 left-0 select-none inset-x-0 bg-[rgba(0,0,0,0.61)] text-left py-3 px-2 text-gray-300 font-semibold duration-200 translate-y-0 opacity-1'>
                <div className='flex items-center justify-center md:gap-4 gap-2'>
                    <button
                        onClick={handlePrevChapter}
                        className='px-3 py-2 rounded-md border-2 border-secondary flex items-center gap-2 
                        bg-[#ffd098] text-slate-800 font-semibold md:w-[210px] md:text-base text-sm'
                    >
                        <FaChevronLeft />Chương trước
                    </button>
                    <button
                        onClick={handleNextChapter}
                        className='px-3 py-2 rounded-md border-2 border-secondary flex items-center 
                        justify-end gap-2 bg-[#ffd098] text-slate-800 font-semibold md:w-[210px] md:text-base text-sm'
                    >
                        Chương tiếp theo <FaChevronRight />
                    </button>
                </div>
            </div>
        </React.Fragment>
    )
}


export default NextPrevChapter