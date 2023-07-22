import ListGenres from '@/components/sidebar/ListGenres'
import { FC } from 'react'

interface pageProps {
    searchParams: {
        type: string
    }
}

const Genres: FC<pageProps> = ({ searchParams }) => {
    // console.log(searchParams);

    return (
        <div>
            The loai - {searchParams.type ?? "all"}
            <ListGenres />
        </div>
    )
}
export default Genres