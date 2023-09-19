import BannerComics from '@/components/home/BannerComics';
import CategoryMobile from '@/components/home/CategoryMobile';
import SectionFullComics from '@/components/home/SectionFullComics';
import SectionTopComics from '@/components/home/SectionTopComics';
import SectionUpdatedComics from '@/components/home/SectionUpdatedComics';
import ListGenres from '@/components/sidebar/ListGenres';
import RankingComics from '@/components/sidebar/RankingComics';

export default function Home() {
    return (
        <main className={` overflow-x-hidden bg-white`}>
            <BannerComics />
            <CategoryMobile />
            <div className='container flex items-start justify-center relative flex-wrap'>
                <div className='xl:w-[70%] w-full lg:pr-2 md:pr-0'>
                    <div className="relative w-full">
                        <SectionTopComics />
                        <SectionFullComics />
                        <SectionUpdatedComics />
                    </div>
                </div>
                <div className='xl:w-[30%] w-full lg:pl-2 md:pl-0'>
                    <RankingComics />
                    <ListGenres />
                </div>
            </div>
        </main>

    )
}