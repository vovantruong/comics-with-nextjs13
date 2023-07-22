import { FC } from 'react'

interface pageProps {
    searchParams: {
        type: string
    }
}

const Genres: FC<pageProps> = ({ searchParams }) => {
    // console.log(searchParams);

    return (
        <div>Genres - {searchParams.type ?? "all"}</div>
    )
}
export default Genres