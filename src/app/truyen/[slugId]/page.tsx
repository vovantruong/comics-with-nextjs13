
import ImageFallback from '@/components/customs/ImageFallback'
import RankingComics from '@/components/sidebar/RankingComics'
import { comicsDetailsProps } from '@/types/typeProps'
import axios from 'axios'
import Link from 'next/link'
import React, { FC, useEffect, useLayoutEffect, useState } from 'react'
import { BsChevronRight } from 'react-icons/bs'
import Skeleton from 'react-loading-skeleton'
import { FaTags, FaUser } from 'react-icons/fa'
import { IoMdWifi } from 'react-icons/io'


interface pageProps {
    params: {
        slugId: string
    }
}

const getComicDetail = async (id: string) => {
    const res = await fetch(`https://comics-api.vercel.app/comics/${id}`)

    if (!res.ok) throw new Error('Error');

    const data = await res.json();

    return data;

}


const ComicsDetail: FC<pageProps> = async ({ params }) => {

    const data = await getComicDetail(params.slugId) as comicsDetailsProps

    return (
        <main className={`overflow-x-hidden bg-white min-h-[80vh]`}>
            <div className='container flex items-start justify-center relative flex-wrap'>
                <div className='xl:w-[70%] w-full lg:pr-2 md:pr-0'>
                    <div className="relative w-full my-5">
                        <div className='relative rounded-md w-full mt-2 md:bg-[#f6f3ee] md:p-4 p-0'>
                            <div className='flex items-center font-semibold md:text-base text-sm'>
                                <Link href="/" className='hover:underline text-slate-700'>Trang chủ</Link>
                                <div className="text-sm mx-2 "><BsChevronRight /></div>
                                <Link href="/the-loai?type=all" className='hover:underline text-slate-700'>Truyện</Link>
                                <div className="text-sm mx-2 "><BsChevronRight /></div>
                                <span className='text-slate-700'>{data.title}</span>
                            </div>
                        </div>
                        <div className='flex items-start w-full md:mt-7 mt-2 flex-wrap'>
                            <div className='w-full md:w-[35%] md:pr-2 pr-0 hidden md:block'>
                                <ImageFallback
                                    src={data?.thumbnail as string}
                                    alt={data?.id as string}
                                    className='w-full h-full object-cover z-0 duration-300 transition-all rounded-md'
                                    width={300}
                                    height={300}
                                    priority
                                />
                            </div>
                            <div className='w-full md:w-[65%] md:pl-2 pl-0'>
                                <h1 className='mt-3 lg:text-[28px] md:text-[20px] text-[22px] font-bold text-[#ed7a00] leading-8 md:text-left text-center'>{data?.title}</h1>
                                <hr className='w-full my-4 border-t-2 border-slate-200' />
                                <ImageFallback
                                    src={data?.thumbnail as string}
                                    alt={data?.id as string}
                                    className='w-[60%] h-full object-cover z-0 duration-300 transition-all rounded-md md:hidden block mt-4 mb-5 mx-auto'
                                    width={300}
                                    height={300}
                                    priority
                                />
                                <ul className='overflow-hidden relative'>
                                    <li className='flex items-center mb-2'>
                                        <p className='w-[33%] text-slate-600 text-base font-semibold flex items-center gap-1 leading-[27px]'><FaUser /> Tác giả: </p>
                                        <p className='w-[67%] leading-[27px] text-slate-600 text-base font-semibold'>{data?.authors}</p>
                                    </li>
                                    <li className='flex items-center mb-2'>
                                        <p className='w-[33%] text-slate-600 text-base font-semibold flex items-center gap-1 leading-[27px]'><IoMdWifi /> Tình trạng: </p>
                                        <p className='w-[67%] leading-[27px] text-slate-600 text-base font-semibold'>{data?.status}</p>
                                    </li>
                                    <li className='flex items-start mb-2'>
                                        <p className='w-[33%] text-slate-600 text-base font-semibold flex items-center gap-1 leading-[27px]'><FaTags /> Thể loại: </p>
                                        <div className='w-[67%] leading-[27px] text-slate-600 text-base font-semibold'>
                                            {data?.genres.map((item, index) => (
                                                <React.Fragment key={item.id}>
                                                    <Link
                                                        href={`/the-loai?type=${item.id}`}
                                                        className='inline-block text-thirdary hover:underline'>
                                                        {item.name}
                                                    </Link>
                                                    {index !== data.genres.length - 1 && <span className="mx-1"> - </span>}
                                                </React.Fragment>
                                            ))}
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className='relative w-full my-6'>
                            <div className='border-b-2 border-slate-300 mb-3 '>
                                <h3 className='text-lg font-bold py-2 px-4 bg-primary text-slate-700 inline-block border-2 border-slate-300 border-b-0'>Mô tả truyện</h3>
                            </div>
                            <div className='text-slate-500 text-base px-2 md:px-0'>
                                {data.description}
                            </div>
                        </div>
                    </div>
                </div>
                <div className='xl:w-[30%] w-full lg:pl-2 md:pl-0'>
                    <RankingComics limitNumber={10} />
                </div>
            </div>
        </main>
    )
}


export default ComicsDetail