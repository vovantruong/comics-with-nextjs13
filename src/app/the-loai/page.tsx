import DetailGenresComic from '@/components/comon/DetailGenresComic';
import ListGenres from '@/components/sidebar/ListGenres';
import Link from 'next/link'
import { FC } from 'react'
import { BsChevronRight } from 'react-icons/bs'

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
                <div className='relative rounded-md md:mt-10 mt-3 w-full order-1 bg-[#f6f3ee] md:p-5 p-3'>
                    <div className='flex items-center font-semibold text-lg'>
                        <Link href="/" className='hover:underline text-slate-700'>Trang chủ</Link>
                        <div className="text-sm mx-2 "><BsChevronRight /></div>
                        <Link href="/the-loai" className='hover:underline text-slate-700'>Thể loại</Link>
                    </div>
                </div>
                <div className='xl:w-[70%] w-full xl:pr-2 pr-0 relative xl:order-2 order-3'>
                    <div className='relative bg-[#f6f3ee] rounded-md p-5 mt-5'>
                        <DetailGenresComic type={type_genres} page={page_genres} />
                    </div>
                </div>
                <div className='xl:w-[30%] w-full xl:pl-2 pl-0 relative xl:order-3 order-2'>
                    <ListGenres
                        className="mt-5"
                        size={"md"}
                        type={type_genres}
                    />
                </div>
            </div>
        </main>

    )
}
export default GenresComics