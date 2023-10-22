import BannerComics from '@/components/comon/BannerComics';
import SectionFullComics from '@/components/comon/SectionFullComics';
import SectionRecentlyRead from '@/components/comon/SectionRecentlyRead';
import SectionTopComics from '@/components/comon/SectionTopComics';
import SectionUpdatedComics from '@/components/comon/SectionUpdatedComics';
import ListGenres from '@/components/sidebar/ListGenres';
import RankingComics from '@/components/sidebar/RankingComics';
import Head from 'next/head';

export default function Home() {
    return (
        <main className={` overflow-x-hidden bg-white`}>
            <BannerComics />
            <div className='container flex items-start justify-center relative flex-wrap'>
                <div className='xl:w-[70%] w-full xl:pr-2 md:pr-0'>
                    <div className="relative w-full">
                        <SectionTopComics />
                        <SectionFullComics />
                        <SectionUpdatedComics />
                        <SectionRecentlyRead />
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