import { FC } from 'react'

interface pageProps {
    params: {
        slugId: string
    }
}

const ComicsDetail: FC<pageProps> = ({ params }) => {
    return <div>ComicsDetail --- {params.slugId}</div>
}
export default ComicsDetail