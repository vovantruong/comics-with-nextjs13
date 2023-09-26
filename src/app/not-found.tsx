import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Link from 'next/link'

export default function NotFound() {
    return (
        <div className='relative'>
            <Header />
            <div className='w-full h-[calc(100vh-153px)] flex flex-col items-center justify-center'>
                <h2>Trang không tồn tại!</h2>
                <p>Xem thêm một số truyện hot</p>
                <Link href="/" className='mt-10 bg-linearPrimary px-5 py-4 text-white font-medium text-lg rounded-md hover:shadow-md transition-all
                border border-slate-400'>
                    Trở về trang chủ
                </Link>
            </div>
            <Footer className='!mt-0' />
        </div>
    )
}