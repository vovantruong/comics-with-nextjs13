'use client'
import { MediaQueryContext } from '@/contexts/MediaQueryContext'
import clsx from 'clsx'
import { FC, useContext, useEffect, useRef, useState } from 'react'
import { IoSearchOutline } from 'react-icons/io5'
import useSWR from 'swr'

interface SearchBoxProps {
    className?: string
}

const fetcherWithTrending = (url: string, headerValue: any) => fetch(url, {
    method: 'POST',
    body: JSON.stringify(headerValue)
}).then(res => res.json())

const SearchBox: FC<SearchBoxProps> = ({ className }) => {
    const [showBoxed, setShowBoxed] = useState(false)
    const [query, setQuery] = useState<string>("")
    const [showModal, setShowModal] = useState<boolean>(false)
    const [dataSearch, setDataSearch] = useState<Object[]>([])

    const searchInputRef = useRef() as any

    const { sm } = useContext(MediaQueryContext);

    const handleSearch = () => {
        console.log('Open Modal ');
    }

    // const { data, mutate } = useSWR(`/api/search`, url => fetcherWithTrending(url, { query: query }), {
    //     revalidateIfStale: false,
    //     revalidateOnFocus: false,
    //     revalidateOnReconnect: false
    // })
    // console.log('>> data: ', data);

    useEffect(() => {
        if (query) {
            console.log(query);
        }
    }, [query])



    return (
        <div className={clsx(className, "flex items-center gap-2 w-full md:w-[60%] lg:w-[unset]")}>
            <div className="relative w-full flex items-center justify-end">
                <input
                    ref={searchInputRef}
                    onFocus={() => setShowBoxed(true)}
                    onBlur={() => setShowBoxed(false)}
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Tìm kiếm tên truyện, tác giả, ..."
                    className="xl:placeholder:text-sm md:placeholder:text-xs outline-none border-[#f0f0f0] h-10 bg-white rounded-md xl:pl-10 xl:pr-2 xl:min-w-[380px] 
                                opacity-[1] text-sm placeholder:text-gray-800 focus:border-secondary lg:w-[250px] md:pl-2 md:pr-10 transition border xl:w-full 
                                min-w-[auto] w-full md:block hidden"
                />
                <button className="absolute xl:left-4 w-auto xl:p-0 top-[50%] -translate-y-[50%] bg-transparent xl:bg-none md:p-1.5 text-2xl p-2 md:bg-transparent 
                bg-linearPrimary xl:text-heading text-white rounded-md md:left-[unset] xl:right-[unset] md:right-2 md:text-lg xl:border-none border "
                    onClick={() => { sm && setShowModal(true) }}
                >
                    <IoSearchOutline />
                </button>
                <div className={clsx('absolute hidden opacity-0 bg-white w-full h-[300px] overflow-y-auto top-[100%] z-10 left-0 rounded-md shadow-md p-2',
                    'element-scrollbar',
                    { "!block opacity-100": showBoxed })}>
                    {(!dataSearch || dataSearch.length === 0) && (
                        <div className='text-center text-sm pt-2'>
                            No result data!
                        </div>)}

                </div>
            </div>
        </div >
    )
}
export default SearchBox