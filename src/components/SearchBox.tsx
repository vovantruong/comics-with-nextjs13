'use client'
import { useMediaQueryContext } from '@/contexts/MediaQueryContext'
import { comicsProps, searchComicsProps } from '@/types/typeProps'
import clsx from 'clsx'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React, { FC, useCallback, useEffect, useRef, useState } from 'react'
import { AiOutlineClose, AiOutlineCloseCircle, AiOutlineLoading3Quarters } from 'react-icons/ai'
import { IoClose, IoSearchOutline } from 'react-icons/io5'

interface SearchBoxProps {
    className?: string
}


const SearchBox: FC<SearchBoxProps> = ({ className }) => {
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [showBoxed, setShowBoxed] = useState(false)
    const [query, setQuery] = useState<string>("")
    const [showModal, setShowModal] = useState<boolean>(false)
    const [dataSearch, setDataSearch] = useState<searchComicsProps[]>([])

    // ---------------------------------------- //
    const searchInputRef = useRef() as any
    const router = useRouter()

    const { sm } = useMediaQueryContext()

    const searchHandle = useCallback(async () => {
        if (query) {
            setIsLoading(true)
            const res = await fetch(`/api/search?query=${query}`)
            const data = await res.json()
            setDataSearch(data)
            setIsLoading(false)
        } else {
            setDataSearch([])
        }
    }, [query, router])

    useEffect(() => {
        const timer = setTimeout(() => {
            searchHandle()
        }, 500)
        return () => clearTimeout(timer);
    }, [searchHandle])

    // Clear query
    useEffect(() => {
        if (!showBoxed) {
            setQuery('')
            setDataSearch([])
        }
    }, [showBoxed])

    const handleBlurInput = () => {
        const timer = setTimeout(() => {
            setShowBoxed(false)
        }, 500)
        return () => clearTimeout(timer);
    }

    function RenderSearchContent() {
        return (
            <>
                {(!dataSearch || dataSearch.length === 0) && (!isLoading) && (
                    <div className='text-center text-sm font-medium absolute top-0 left-0 w-full h-full flex items-center justify-center z-10'>
                        Không tìm thấy truyện!
                    </div>)}
                {isLoading && (
                    <div className='absolute top-0 left-0 w-full h-full flex items-center justify-center z-10 '>
                        <div className='animate-spin text-[#fe7a00] text-4xl'>
                            <AiOutlineLoading3Quarters />
                        </div>
                    </div>
                )}
                {(dataSearch && dataSearch.length > 0 && !isLoading) && (
                    dataSearch.map((item, i) => (
                        <Link key={item.id} href={`/truyen/${item.id}`} className='w-full mb-4 flex items-start 
                            hover:bg-slate-100 transition-all rounded-md p-1 overflow-hidden'>
                            <div className='sm:max-w-[100px] md:max-w-[75px] max-w-[80px] w-full h-full overflow-hidden rounded-md border border-[#fe7a00] bg-slate-500 mb-1' title={item.title}>
                                <Image src={item.thumbnail} alt={item.id} className='w-full h-full object-cover rounded-md' priority width={100} height={100} />
                            </div>
                            <div className='pl-2 text-xs flex flex-col'>
                                <h1 className='font-bold text-lg line-clamp-2 leading-[1] sm:mb-1 mb-3'>{item.title}</h1>
                                <p className='font-medium'>Tác giả: <span className='text-[#d3873f]'>{item.authors}</span></p>
                                <p><span className='font-medium'>Trạng thái:</span> {item.lastest_chapter}</p>
                                <div className='line-clamp-2 flex flex-wrap items-center justify-start mt-2'>
                                    {item?.genres.map(genres => <span key={genres} className='bg-[#fdd58b] text-slate-700 rounded-md px-1 py-[2px] mr-[2px] mb-[3px] text-[10px] font-medium'>{genres}</span>)}
                                </div>
                            </div>
                        </Link>
                    ))
                )}
            </>
        )
    }

    return (
        <div className={clsx(className, "flex items-center gap-2 w-full md:w-[60%] lg:w-[unset]")}>
            <div className="relative w-full flex items-center justify-end">
                <div className='relative w-full hidden md:block'>
                    <input
                        ref={searchInputRef}
                        onFocus={() => setShowBoxed(true)}
                        onBlur={handleBlurInput}
                        type="text"
                        value={query}
                        onChange={(e) => { setQuery(e.target.value); setShowBoxed(true) }}
                        placeholder="Tìm kiếm tên truyện, tác giả, ..."
                        className={clsx(className, "xl:placeholder:text-sm md:placeholder:text-xs outline-none border-[#f0f0f0] h-10 bg-white rounded-md xl:pr-2 xl:min-w-[380px]",
                            "opacity-[1] text-sm placeholder:text-gray-800 focus:border-secondary lg:w-[320px] pl-3 md:pr-10 transition border xl:w-full ",
                            "min-w-[auto] w-full"
                        )}
                    />
                </div>
                <button className="absolute w-auto top-[50%] -translate-y-[50%] text-2xl p-2 md:p-1.5 bg-linearPrimary text-white rounded-md md:right-2 right-0 md:text-lg 
                xl:border-none border-2 sm:border-0"
                    onClick={() => { sm && setShowModal(true) }}
                >
                    <IoSearchOutline />
                </button>
                <div className={clsx('absolute hidden opacity-0 bg-white w-full h-[450px] overflow-y-auto top-[110%] z-[100] left-0 rounded-md shadow-md p-2',
                    'element-scrollbar', { "!block opacity-100": showBoxed })}>
                    <RenderSearchContent />
                </div>
            </div>
            {(showModal && sm) && (
                <div className='fixed top-0 left-0 z-[1000] w-full h-full'>
                    <div className='absolute w-full h-full top-0 left-0 z-0 bg-[rgba(0,0,0,0.2)]' onClick={() => setShowModal(false)}></div>
                    <div className=' bg-white rounded-lg shadow-md w-[90%] h-au mx-auto z-10 absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] pt-8 sm:p-5 p-3 overflow-hidden'>
                        <button className='absolute top-4 right-4 text-2xl text-slate-400' onClick={() => setShowModal(false)}><IoClose /></button>
                        <h2 className='text-center font-semibold mb-4 text-2xl text-slate-500'>Tìm kiếm</h2>
                        <input
                            ref={searchInputRef}
                            type="text"
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                            placeholder="Tìm kiếm tên truyện, tác giả, ..."
                            className={clsx(className, "xl:placeholder:text-sm md:placeholder:text-xs outline-none border rounded-md border-slate-400 h-10 bg-white xl:pr-2 xl:min-w-[380px]",
                                "opacity-[1] text-sm placeholder:text-gray-800 focus:border-secondary lg:w-[320px] pl-3 md:pr-10 transition xl:w-full ",
                                "min-w-[auto] w-full"
                            )}
                        />
                        <div className='w-full h-[45vh] overflow-y-auto element-scrollbar mt-5 relative'>
                            <RenderSearchContent />
                        </div>
                    </div>
                </div>
            )}
        </div >
    )
}
export default SearchBox