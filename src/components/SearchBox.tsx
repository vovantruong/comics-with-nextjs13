'use client'
import { MediaQueryContext } from '@/contexts/MediaQueryContext'
import { comicsProps, searchComicsProps } from '@/types/typeProps'
import clsx from 'clsx'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { FC, useCallback, useContext, useEffect, useRef, useState } from 'react'
import { AiOutlineLoading3Quarters } from 'react-icons/ai'
import { IoSearchOutline } from 'react-icons/io5'
import { useDebounce } from 'use-debounce'
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
    const { sm } = useContext(MediaQueryContext);
    const router = useRouter()

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


    return (
        <div className={clsx(className, "flex items-center gap-2 w-full md:w-[60%] lg:w-[unset]")}>
            <div className="relative w-full flex items-center justify-end">
                <input
                    ref={searchInputRef}
                    onFocus={() => setShowBoxed(true)}
                    onBlur={handleBlurInput}
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Tìm kiếm tên truyện, tác giả, ..."
                    className="xl:placeholder:text-sm md:placeholder:text-xs outline-none border-[#f0f0f0] h-10 bg-white rounded-md xl:pr-2 xl:min-w-[380px] 
                                opacity-[1] text-sm placeholder:text-gray-800 focus:border-secondary lg:w-[270px] pl-3 md:pr-10 transition border xl:w-full 
                                min-w-[auto] w-full md:block hidden"
                />
                <button className="absolute w-auto top-[50%] -translate-y-[50%] text-2xl p-1.5 bg-linearPrimary text-white rounded-md right-2 md:text-lg 
                xl:border-none border "
                    onClick={() => { sm && setShowModal(true) }}
                >
                    <IoSearchOutline />
                </button>
                <div className={clsx('absolute hidden opacity-0 bg-white w-full h-[450px] overflow-y-auto top-[110%] z-[100] left-0 rounded-md shadow-md p-2',
                    'element-scrollbar', { "!block opacity-100": showBoxed })}>
                    {(!dataSearch || dataSearch.length === 0) && (!isLoading) && (
                        <div className='text-center text-sm absolute top-0 left-0 w-full h-full flex items-center justify-center z-10'>
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
                            <Link key={item.id} href={`/truyen/${item.id}`} className='w-full h-[110px] mb-3 flex items-start 
                            hover:bg-slate-100 transition-all rounded-md p-1 overflow-hidden'>
                                <div className='max-w-[75px] w-full h-full overflow-hidden rounded-md border border-[#fe7a00] bg-slate-500 mb-1' title={item.title}>
                                    <Image src={item.thumbnail} alt={item.id} className='w-full h-full object-cover rounded-md' priority width={100} height={100} />
                                </div>
                                <div className='pl-2 text-xs flex flex-col overflow-hidden'>
                                    <h1 className='font-bold text-lg line-clamp-2 leading-[1] mb-1'>{item.title}</h1>
                                    <p className='font-medium'>Tác giả: <span className='text-[#d3873f]'>{item.authors}</span></p>
                                    <p><span className='font-medium'>Trạng thái:</span> {item.lastest_chapter}</p>
                                    <p><span className='font-medium line-clamp-2'>Thể loại:</span> {item?.genres.join(", ")}</p>
                                </div>
                            </Link>
                        ))
                    )}
                </div>
            </div>
        </div >
    )
}
export default SearchBox