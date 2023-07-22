'use client'
import { MediaQueryContext } from '@/contexts/MediaQueryContext'
import clsx from 'clsx'
import { FC, useContext, useState } from 'react'
import { IoSearchOutline } from 'react-icons/io5'

interface SearchBoxProps {
    className?: string
}

const SearchBox: FC<SearchBoxProps> = ({ className }) => {
    const [query, setQuery] = useState<string>("")
    const [showModal, setShowModal] = useState<boolean>(false)

    const { sm } = useContext(MediaQueryContext);

    const handleSearch = () => {
        console.log('query');
    }
    return (
        <div className={clsx(className, "flex items-center gap-2 w-full md:w-[60%] lg:w-[unset]")}>
            <div className="relative w-full flex items-center justify-end">
                <input
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Tìm kiếm tên truyện, tác giả, ..."
                    className="xl:placeholder:text-sm md:placeholder:text-xs outline-none border-[#f0f0f0] h-10 bg-white rounded-md xl:pl-10 xl:pr-2 xl:min-w-[350px] 
                                opacity-[1] text-sm placeholder:text-gray-800 focus:border-secondary lg:w-[250px] md:pl-2 md:pr-10 transition border xl:w-full 
                                min-w-[auto] w-full md:block hidden"
                />
                <button className="absolute xl:left-4 w-auto xl:p-0 top-[50%] -translate-y-[50%] bg-transparent xl:bg-none md:p-1.5 text-2xl p-2 md:bg-transparent 
                bg-linearPrimary xl:text-heading text-white rounded-md md:left-[unset] xl:right-[unset] md:right-2 md:text-lg xl:border-none border "
                    onClick={() => { sm ? setShowModal(true) : handleSearch() }}
                >
                    <IoSearchOutline />
                </button>
            </div>
            <button
                className="border text-sm xl:flex items-center justify-center h-10 px-3 rounded-md bg-linearPrimary 
                            text-white font-semibold md:hidden hidden w-[115px]"
            >
                Tìm kiếm
            </button>
        </div>
    )
}
export default SearchBox