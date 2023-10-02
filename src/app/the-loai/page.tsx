import DetailGenresComic from '@/components/DetailGenresComic';
import Link from 'next/link'
import { FC } from 'react'
import { BsChevronRight, BsFillCaretDownFill } from 'react-icons/bs'

interface GenresComicsProps {
    searchParams: {
        type: string,
        page: string
    }
}

const GenresComics: FC<GenresComicsProps> = ({ searchParams }) => {
    const type_genres = searchParams.type ?? "all"
    const page_genres = searchParams.page ?? "1"

    return (
        <main className="overflow-x-hidden bg-white">
            <div className='container flex items-start justify-center relative flex-wrap !md:px-2 !px-3'>
                <div className='relative rounded-md md:mt-10 mt-3 w-full bg-[#f6f3ee] md:p-5 p-3'>
                    <div className='flex items-center font-semibold sm:text-lg text-xs'>
                        <Link href="/" className='hover:underline text-slate-700'>Trang chủ</Link>
                        <div className="text-sm mx-2 "><BsChevronRight /></div>
                        <Link href="/the-loai?type=all" className='hover:underline text-slate-700'>Thể loại</Link>
                    </div>
                    <div className='absolute md:right-5 right-3 text-xl font-medium top-[50%] -translate-y-[50%] lg:hidden text-slate-500 w-[35px] h-[35px] cursor-pointer 
                    flex items-center justify-between'>
                        <BsFillCaretDownFill />
                    </div>
                </div>
                <div className='w-full relative'>
                    <div className='relative bg-[#f6f3ee] rounded-md py-5 px-3 mt-5'>
                        <DetailGenresComic type={type_genres} page={page_genres} />
                    </div>
                </div>
            </div>
        </main>

    )
}
export default GenresComics