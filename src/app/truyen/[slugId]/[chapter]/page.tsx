import ScrollTop from '@/components/ScrollTop'
import ImageFallback from '@/components/customs/ImageFallback'
import NestedLayout from '@/components/layout/NestedLayout'
import { singleComic } from '@/types/typeProps'
import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'
import { FaChevronLeft } from 'react-icons/fa'

interface ChapterProps {
    params: {
        chapter: string
        slugId: string
    }
}



const getSingleComic = async (id: string, chapter: string) => {
    try {
        const res = await fetch(`https://comics-api.vercel.app/comics/${id}/chapters/${chapter}`)
        const data = await res.json();
        return data;

    } catch (error) {
        new Error('Error');
    }

}

// or Dynamic metadata
export async function generateMetadata({ params }: ChapterProps) {
    const data = await getSingleComic(params.slugId, params.chapter) as singleComic;
    return {
        title: `${data.comic_name} - ${data.chapter_name}`,
        description: 'Truyện Hay - Nơi tinh hoa của những câu chuyện đẹp màu sắc đang chờ đón bạn. Chúng tôi tự hào giới thiệu một kho truyện tranh phong phú và đa dạng, hứa hẹn mang đến cho bạn những giây phút giải trí thú vị và tận hưởng những cung bậc cảm xúc đầy sắc màu.',
    }
}

const ChapterComic: FC<ChapterProps> = async ({ params }) => {

    const data = await getSingleComic(params.slugId, params.chapter) as singleComic;

    return (
        <NestedLayout>
            <div className='min-h-screen w-full bottom-0 bg-[#a8a8a8]'>
                <div className='w-full h-full overflow-y-auto text-slate-800 element-scrollbar'>
                    <div className='fixed top-0 left-0 select-none inset-x-0 bg-[rgba(0,0,0,0.61)] text-left py-3 px-2 text-gray-300 font-semibold duration-200 translate-y-0 opacity-1'>
                        <div className='md:block hidden'>
                            <div className='flex items-center gap-4 md:flex-row flex-col'>
                                <Link
                                    className='hover:text-secondary flex items-center gap-2 line-clamp-1'
                                    href={`/truyen/${params.slugId}`}>
                                    <FaChevronLeft />{data.comic_name}
                                </Link>
                                <span className='md:block hidden'>-</span>
                                <span>{data.chapter_name}</span>
                            </div>
                        </div>
                        <div className='md:hidden block'>
                            <Link href={`/truyen/${params.slugId}`} className='flex items-center gap-2'>
                                <FaChevronLeft /> Trở về
                            </Link>
                        </div>
                    </div>
                    <div className='container'>
                        <div className='md:hidden block mt-20'>
                            <h3 className='text-center font-bold text-lg bg-primary text-slate-700 rounded-md p-4'>
                                {data.comic_name} <br /> <span className='text-yellow-700 uppercase pt-2 block'> {data.chapter_name}</span>
                            </h3>
                        </div>
                        <div className='text-center max-w-[42rem] mx-auto my-12'>
                            {data.images.map((item) => (
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
                </div>
            </div>
        </NestedLayout>
    )
}
export default ChapterComic