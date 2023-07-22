'use client'
import { FC, useState } from 'react'
import Link from 'next/link';
import Image from 'next/image'
import { comicsProps } from '@/types/typeProps';
import clsx from 'clsx';
import { BsFire } from 'react-icons/bs'
import { FaComments, FaEye } from 'react-icons/fa';
import { AiFillHeart } from 'react-icons/ai';

interface CardComicProps {
    data: comicsProps
    type: 'basic' | 'normal' | 'advantage'
    className?: string
}

const CardComic: FC<CardComicProps> = ({ data, type = 'basic', className }) => {

    const { thumbnail, title, id, short_description, total_views, total_comments, followers, authors, genres, status } = data

    function renderTypeBasic() {
        return (
            <Link
                href={id}
                className={clsx(className, 'relative block w-full h-full border-2 border-[#d7d7d7] hover:border-secondary shadow-md overflow-hidden rounded-md')}
                title={title}
            >
                <div className='absolute z-[1] right-1 top-1  text-white flex items-center gap-1 font-medium uppercase'>
                    <div className='py-1 px-2 rounded bg-yellow-400 text-xs group-first:block hidden'>
                        <span>#1</span>
                    </div>
                    <div className='flex items-center gap-1 rounded-md bg-red-500 py-1 px-2 text-xs'>
                        <span><BsFire /></span>
                        <span className='group-first:block hidden' >Hot</span>
                    </div>
                </div>
                <Image src={thumbnail} alt={id} className='w-full h-full object-cover z-0 group-hover:scale-105 duration-300 transition-all' width={300} height={300} priority />
                <div className='absolute w-full bottom-0 z-[1] text-xs mt-1 bg-[rgba(0,0,0,0.6)] text-white flex items-center justify-start group-first:justify-center 
                font-medium group-first:text-yellow-300 group-first:text-sm px-2 h-10'>
                    <p className='line-clamp-2 group-first:line-clamp-1'>{title}</p>
                </div>
            </Link>
        )
    }

    function renderTypeNormal() {
        return (
            <Link
                href={id}
                className={clsx(className, 'relative block w-full h-full border-2 border-[#d7d7d7] hover:border-secondary shadow-md overflow-hidden rounded-md group')}
            >
                <div className='absolute border-t border-gray-700 bottom-0 px-2 py-1 left-0 lg:group-hover:h-full w-full h-10 sm:h-20 bg-[rgba(0,0,0,0.6)] group-hover:bg-[rgba(0,0,0,0.8)] transition-all z-[1] duration-500'>
                    <div className='flex-col justify-center text-white sm:text-sm text-xs font-medium border-b border-gray-300 pb-[2px] h-10 flex items-center text-center'>
                        <p className='line-clamp-2 group-hover:line-clamp-3 leading-[1.2]'>{title}</p>
                    </div>
                    <div className='text-white text-[9px] items-center justify-between w-full pt-2 gap-1 flex-col sm:flex-row sm:flex hidden'>
                        <div className='sm:w-auto w-full flex items-center justify-center gap-1 flex-1 border-secondary rounded-[4px] border bg-[#ffda0b41] py-[2px] px-1'>
                            <FaEye />
                            <span>{total_views}</span>
                        </div>
                        <div className='sm:w-auto w-full flex items-center justify-center gap-1 flex-1 border-secondary rounded-[4px] border bg-[#ffda0b41] py-[2px] px-1'>
                            <FaComments />
                            <span>{total_comments}</span>
                        </div>
                        <div className='sm:w-auto w-full flex items-center justify-center gap-1 flex-1 border-secondary rounded-[4px] border bg-[#ffda0b41] py-[2px] px-1'>
                            <AiFillHeart />
                            <span>{followers}</span>
                        </div>
                    </div>
                    <div className='text-white text-[11px] pt-2 transition-all group-hover:delay-300 opacity-0 group-hover:opacity-100 duration-300 sm:block hidden'>
                        <p className='line-clamp-5'>
                            <span className='underline text-secondary font-semibold pr-[3px]'>Tóm tắt:</span>
                            <span className=''>{short_description ? short_description : "Truyện không có bản tóm tắt!"}</span>
                        </p>
                    </div>
                    <div className='text-white text-[11px] pt-2 transition-all group-hover:delay-[400ms] opacity-0 group-hover:opacity-100 duration-300 sm:block hidden'>
                        <span className='underline text-secondary font-semibold pr-[3px]'>
                            Tác giả:
                        </span>
                        {authors.toLowerCase() !== 'updating' ? authors : "Đang cập nhật"}
                    </div>
                    <div className='text-white text-[11px] pt-1 transition-all group-hover:delay-[500ms] opacity-0 group-hover:opacity-100 duration-300 sm:block hidden'>
                        <p className='inline-flex flex-wrap'>
                            <span className='underline text-secondary font-semibold pr-[3px]'>Thể loại:</span>
                            {genres.length > 0 ? genres.map((item, index) => item.name).join(', ') : "Đang cập nhật"}
                        </p>
                    </div>
                    <div className='text-white text-[11px] pt-1 transition-all group-hover:delay-[600ms] opacity-0 group-hover:opacity-100 duration-300 sm:block hidden'>
                        <span className='underline text-secondary font-semibold pr-[3px]'>Tình trạng:</span>
                        {status.toLowerCase() === "updating" ? "Đang tiến hành" : "Đã hoàn thành"}
                    </div>
                </div>
                <div className='absolute z-[1] right-1 top-1  text-white flex items-center gap-1 font-medium uppercase'>
                    <div className='flex items-center gap-1 rounded-md bg-red-500 py-1 px-2 text-xs'>
                        <span><BsFire /></span>
                        <span className='group-first:block hidden' >Hot</span>
                    </div>
                </div>
                <Image src={thumbnail} alt={id} className='w-full h-full object-cover z-0 duration-300 transition-all' width={300} height={300} priority />
            </Link>
        )
    }

    return (
        <>
            {type === 'basic' && (renderTypeBasic())}
            {type === 'normal' && (renderTypeNormal())}
            {type === 'advantage' && (renderTypeBasic())}
        </>
    )
}


export default CardComic