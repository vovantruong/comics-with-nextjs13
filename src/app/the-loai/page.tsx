import DetailGenresComic from '@/components/comon/DetailGenresComic';
import ListGenres from '@/components/sidebar/ListGenres';
import RankingComics from '@/components/sidebar/RankingComics';
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
            <div className='container flex items-start justify-center relative flex-wrap'>
                <div className='xl:w-[70%] w-full lg:pr-2 md:pr-0 relative'>
                    <div className='relative bg-[#f6f3ee] rounded-md p-5 mt-5'>
                        <div className='flex items-center mb-4 pb-3 font-semibold text-lg border-b border-slate-400'>
                            <Link href="/" className='hover:underline text-slate-700'>Trang chủ</Link>
                            <div className="text-sm mx-2 "><BsChevronRight /></div>
                            <Link href="/the-loai" className='hover:underline text-slate-700'>Thể loại</Link>
                        </div>
                        <DetailGenresComic type={type_genres} page={page_genres} />
                    </div>
                </div>
                <div className='xl:w-[30%] w-full lg:pl-2 md:pl-0 relative'>
                    <ListGenres className="mt-5" size={"md"} type={type_genres} />
                    <RankingComics limitNumber={10} />
                </div>
            </div>
        </main>

    )
}
export default GenresComics