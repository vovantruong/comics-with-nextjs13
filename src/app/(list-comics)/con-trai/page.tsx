import RenderBoyComics from '@/components/listComic/RenderBoyComics'
import RenderUpdatingComics from '@/components/listComic/RenderUpdatingComics'
import Link from 'next/link'
import { FC } from 'react'
import { BsChevronRight } from 'react-icons/bs'

interface newProps {
    searchParams: {
        page: string
    }
}

const fetchDataBoyComics = async (page?: string) => {
    try {
        const res = await fetch(`https://comics-api.vercel.app/boy-comics?page=${page}`) // Call API lấy truyện full trending
        const data = res.json()
        return data
    } catch (error) {
        console.log('Error');
    }
}

// Generate metadata
export async function generateMetadata() {
    return {
        title: `Truyện con trai | Truyện tranh hay`,
        description: 'Truyện Hay - Nơi tinh hoa của những câu chuyện đẹp màu sắc đang chờ đón bạn. Chúng tôi tự hào giới thiệu một kho truyện tranh phong phú và đa dạng, hứa hẹn mang đến cho bạn những giây phút giải trí thú vị và tận hưởng những cung bậc cảm xúc đầy sắc màu.',
    }
}


const BoyComics: FC<newProps> = async ({ searchParams }) => {

    const { comics, total_pages } = await fetchDataBoyComics(searchParams.page)

    return (
        <section className="overflow-x-hidden bg-white">
            <div className='container flex items-start justify-center relative flex-wrap !md:px-2 !px-0'>
                <div className='relative rounded-md md:mt-5 mt-3 w-full bg-[#f6f3ee] md:p-5 p-3'>
                    <div className='flex items-center font-semibold sm:text-lg text-xs'>
                        <Link href="/" className='hover:underline text-slate-700'>Trang chủ</Link>
                        <div className="text-sm mx-2 "><BsChevronRight /></div>
                        <Link href="/the-loai?type=all" className='hover:underline text-slate-700'>Truyện con trai</Link>
                        <div className="text-sm mx-2 "><BsChevronRight /></div>
                        <span className='text-slate-700'>Trang {searchParams.page ?? '1'}</span>
                    </div>
                </div>
                <div className='w-full relative'>
                    <div className='relative bg-[#f6f3ee] rounded-md py-5 px-3 mt-5 xl:mb-12 mb-5'>
                        <RenderBoyComics data={comics} total_pages={total_pages} />
                    </div>
                </div>
            </div>
        </section>
    )
}
export default BoyComics