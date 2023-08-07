import ListGenres from "@/components/sidebar/ListGenres"
import RankingComics from "@/components/sidebar/RankingComics"

interface LayoutGenresProps {
    children: React.ReactNode
    className?: string
}
export default function LayoutGenres({
    children,
    className
}: LayoutGenresProps) {

    return (
        <main className={`${className} overflow-x-hidden bg-white`}>
            <div className='container flex items-start justify-center relative flex-wrap'>
                <div className='xl:w-[70%] w-full lg:pr-2 md:pr-0'>
                    {children}
                </div>
                <div className='xl:w-[30%] w-full lg:pl-2 md:pl-0'>
                    <RankingComics />
                    <ListGenres />
                </div>
            </div>
        </main>
    )
}