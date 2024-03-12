import RootLayout from '@/components/layout/RootLayout'
import ListGenres from '@/components/sidebar/ListGenres'
import RankingComics from '@/components/sidebar/RankingComics'
import { FC } from 'react'

interface layoutProps {
    children: React.ReactNode
}

const layout: FC<layoutProps> = ({ children }) => {
    return (
        <RootLayout>
            <main className={` overflow-x-hidden bg-white`}>
                <div className='container flex items-start justify-center relative flex-wrap'>
                    <div className='xl:w-[70%] w-full lg:pr-2 md:pr-0'>
                        <div className="relative w-full">
                            {children}
                        </div>
                    </div>
                    <div className='xl:w-[30%] w-full lg:pl-2 md:pl-0'>
                        <RankingComics />
                        <ListGenres />
                    </div>
                </div>
            </main>
        </RootLayout>
    )
}
export default layout