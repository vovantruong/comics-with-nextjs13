import { FC } from 'react'

interface GenresComicsProps {
    searchParams: {
        type: string
    }
}

const GenresComics: FC<GenresComicsProps> = ({ searchParams }) => {

    const type_genres = searchParams.type ?? "all"

    return <div>GenresComics --- {type_genres}</div>
}
export default GenresComics