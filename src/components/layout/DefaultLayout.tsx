import { FC, ReactNode, memo } from 'react'
import clsx from 'clsx'
import ListGenres from '../sidebar/ListGenres'
import RankingComics from '../sidebar/RankingComics'
import ComicByAuthor from '../sidebar/ComicByAuthor'
import BannerComics from '../comon/BannerComics'

interface layoutProps {
    children: ReactNode,
    className?: string,
    visibleSideRanking?: boolean
    visibleComicByAuthor?: boolean
    visibleBanner?: boolean
    visibleListGenres?: boolean
}

const DefaultLayout: FC<layoutProps> = ({
    children,
    className,
    visibleSideRanking = true,
    visibleComicByAuthor = false,
    visibleBanner = true,
    visibleListGenres = true,
}) => {

    console.log('This is Default Layout');


    return <main className={`${className} overflow-x-hidden bg-white`}>
        {visibleBanner && <BannerComics />}
        <div className='container flex items-start justify-center relative flex-wrap'>
            <div className='xl:w-[70%] w-full lg:pr-2 md:pr-0'>
                {children}
            </div>
            <div className='xl:w-[30%] w-full lg:pl-2 md:pl-0'>
                {visibleSideRanking && <RankingComics />}
                {visibleComicByAuthor && <ComicByAuthor />}
                {/* {visibleListGenres && <ListGenres />} */}
            </div>
        </div>
    </main>
}
export default memo(DefaultLayout)