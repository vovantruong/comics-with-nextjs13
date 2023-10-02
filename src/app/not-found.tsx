import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Link from 'next/link'

export default function NotFound() {

    return (
        <div className='relative bg-slate-100 w-screen h-screen'>
            <div className='w-full h-full flex flex-col items-center justify-center'>
                <h2 className='font-bold text-5xl py-3 mb-3 uppercase text-slate-600'>Trang không tồn tại!</h2>
                <Link href="/" className='mt-10 bg-linearPrimary sm:px-5 sm:py-4 px-3 py-2 text-white font-medium text-lg rounded-md hover:shadow-md transition-all'>
                    Trở về trang chủ
                </Link>
            </div>
        </div>
    )
}