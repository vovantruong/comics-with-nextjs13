'use client'
import { FC, useEffect, useState, useRef } from 'react'
import IconTitle from '../../../public/images/icon-full-book.png';
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, FreeMode, Grid } from 'swiper/modules';
import CardComic from '../CardComic';
import { comicsProps } from '@/types/typeProps';
import { getFullComics } from '@/utils/services';
import Skeleton from 'react-loading-skeleton';
import clsx from 'clsx';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

interface SectionFullComicsProps { }

const SectionFullComics: FC<SectionFullComicsProps> = ({ }) => {
    const [dataFullComics, setDataFullComic] = useState<comicsProps[]>([])
    const swiperRef = useRef() as any;

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await getFullComics({ limit: 20 })
                setDataFullComic(data)
            } catch (error) {
                console.log('Error');
            }
        }
        fetchData()
    }, [])

    return (
        <div className="w-full mt-5 bg-[#f6f3ee] rounded-md overflow-hidden sm:px-4 sm:py-5 p-2 border">
            <div className="flex items-end justify-between border-b-[3px] border-secondary pb-2 mb-2">
                <div className="text-gray-700 capitalize font-bold text-lg sm:text-2xl flex items-end gap-2">
                    <Image src={IconTitle} alt='icon-title' width={50} height={50} className='sm:w-[50px] sm:h-[50px] w-[35px] h-[35px]' />
                    <h2>Truyện full</h2>
                </div>
            </div>
            <div className="overflow-hidden rounded-md mt-5 relative group/pagi">
                <div className='relative rounded-md bg-white w-full border-none sm:border sm:border-solid overflow-hidden'>
                    <Swiper
                        ref={swiperRef}
                        slidesPerView={4}
                        freeMode={true}
                        grid={{
                            rows: 2,
                            fill: "row"
                        }}
                        pagination={{
                            clickable: true,
                            clickableClass: clsx("sec-full-pagination"),
                            bulletActiveClass: clsx("sec-full__active")
                        }}
                        modules={[Grid, Pagination, FreeMode]}
                        breakpoints={{
                            0: {
                                slidesPerView: 2,
                                slidesPerGroup: 1,
                                grid: {
                                    rows: 2,
                                    fill: "row"
                                }
                            },
                            768: {
                                slidesPerView: 3,
                                slidesPerGroup: 1,
                                grid: {
                                    rows: 2,
                                    fill: "row"
                                }
                            },
                            1024: {
                                slidesPerView: 4,
                                slidesPerGroup: 1,
                                grid: {
                                    rows: 2,
                                    fill: "row"
                                }
                            },
                        }}
                    >
                        {
                            (dataFullComics && dataFullComics.length > 0) ? dataFullComics.map(item => (
                                <SwiperSlide key={item.id} className='h-full w-full py-2 px-2'>
                                    <div className='h-[320px] rounded-md border'>
                                        <CardComic type='normal' data={item} />
                                    </div>
                                </SwiperSlide>
                            )) : <LoadingSkeleton />
                        }
                    </Swiper>
                </div>
                <div className='absolute left-0 right-0 top-[45%] -translate-y-[50%] w-full z-10 lg:opacity-0 transition-all duration-300 group-hover/pagi:opacity-100 
                sm:block hidden opacity-100'>
                    <button
                        onClick={() => swiperRef.current.swiper.slidePrev()}
                        className='absolute left-3 lg:left-0 text-white w-10 h-10 rounded-full bg-[#ffda0bbf] flex items-center justify-center border border-secondary 
                        lg:group-hover/pagi:left-7 transition-all duration-500'
                    >
                        <FaChevronLeft />
                    </button>
                    <button
                        onClick={() => swiperRef.current.swiper.slideNext()}
                        className='absolute right-3 lg:right-0 text-white w-10 h-10 rounded-full bg-[#ffda0bbf] flex items-center justify-center border border-secondary 
                        lg:group-hover/pagi:right-7 transition-all duration-500'
                    >
                        <FaChevronRight />
                    </button>
                </div>
            </div>
        </div>
    )
}

function LoadingSkeleton() {
    return (
        Array.from(Array(8).keys()).map(item => (
            <div key={item} className=''
            >
                <Skeleton containerClassName='w-full h-full flex' />
            </div>
        ))
    )
}


export default SectionFullComics