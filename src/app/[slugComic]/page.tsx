import { FC } from 'react'

interface pageProps {
    params: {
        slugComic: string
    }
}

async function fetchComics(id: string) {

}

const ComicDetail: FC<pageProps> = ({ params }) => {
    return <div>
        Comic detail - {params.slugComic}
    </div>
}
export default ComicDetail