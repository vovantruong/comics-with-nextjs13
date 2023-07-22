import DefaultLayout from '@/components/layout/DefaultLayout'
import { FC, Suspense } from 'react'

interface layoutProps {
    children: React.ReactNode
}

const layout: FC<layoutProps> = ({ children }) => {
    return (
        <>
            {children}
            {/* <DefaultLayout visibleBanner={false}>
            {children}
        </DefaultLayout> */}
        </>
    )
}
export default layout