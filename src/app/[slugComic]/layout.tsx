import DefaultLayout from '@/components/layout/DefaultLayout'
import { FC } from 'react'

interface layoutProps {
    children: React.ReactNode
}

const layout: FC<layoutProps> = ({ children }) => {
    return (
        <DefaultLayout visibleBanner={false} visibleSideRanking={false} visibleComicByAuthor={true}>
            {children}
        </DefaultLayout>
    )
}
export default layout