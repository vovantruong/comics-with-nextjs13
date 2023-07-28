import { FC } from 'react'

interface ChapterProps {
    params: {
        chapter: string
    }
}

const ChapterComic: FC<ChapterProps> = ({ params }) => {

    return <div>Chapter - {params.chapter}</div>
}
export default ChapterComic