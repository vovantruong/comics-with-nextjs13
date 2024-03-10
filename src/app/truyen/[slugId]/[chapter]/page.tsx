import { FC } from 'react'

interface ChapterProps {
    params: {
        chapter: string
        slugId: string
    }
}

interface singleComic {
    page: number
    src: string
    backup_src: string
}

const getComicDetail = async (id: string) => {

    try {
        const res = await fetch(`https://comics-api.vercel.app/comics/${id}`)
        const data = await res.json();
        return data;

    } catch (error) {
        new Error('Error');
    }

}

const ChapterComic: FC<ChapterProps> = ({ params }) => {

    return <div className='min-h-screen fixed top-0 left-0 right-0 bottom-0 bg-[#18181b]'>
        <div className='w-full h-full overflow-y-auto text-white element-scrollbar'>
            <div className='container'>
                Single Comic - {params.slugId} - {params.chapter}
            </div>
        </div>
    </div>
}
export default ChapterComic