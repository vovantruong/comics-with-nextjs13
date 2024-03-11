import './globals.css'
import type { Metadata } from 'next'
import clsx from 'clsx'
import { Montserrat } from 'next/font/google'
import { MediaQueryProvider } from '@/contexts/MediaQueryContext'


import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/grid';
import 'swiper/css/thumbs'
import 'swiper/css/free-mode'

import 'react-loading-skeleton/dist/skeleton.css'

const montserrat = Montserrat({
    subsets: ['latin'],
    variable: '--font-mont'
})

export const metadata: Metadata = {
    title: 'Truyện Hay',
    description: 'Truyện Hay - Nơi tinh hoa của những câu chuyện đẹp màu sắc đang chờ đón bạn. Chúng tôi tự hào giới thiệu một kho truyện tranh phong phú và đa dạng, hứa hẹn mang đến cho bạn những giây phút giải trí thú vị và tận hưởng những cung bậc cảm xúc đầy sắc màu.',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body
                className={clsx(montserrat.variable, 'font-mont bg-light w-full font-normal')}
                cz-shortcut-listen="true"
            >
                <MediaQueryProvider >
                    {children}
                </MediaQueryProvider>
            </body>
        </html>
    )
}
