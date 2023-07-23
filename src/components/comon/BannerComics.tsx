'use client'
import { FC, useContext, useEffect, useRef, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination, Navigation, FreeMode } from 'swiper/modules';
import { MediaQueryContext } from '@/contexts/MediaQueryContext'
import { comicsProps } from '@/types/typeProps'
import { getTrending } from '@/utils/services'
import CardComic from '../CardComic'
import Skeleton from 'react-loading-skeleton';
import clsx from 'clsx';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const BannerComics = ({ }) => {
    const [dataTrending, setDataTrending] = useState<comicsProps[]>([])

    const swiperRef = useRef() as any;

    useEffect(() => {
        const getTopComics = async () => {
            try {
                const res = await getTrending({ limit: 15 })
                setDataTrending(res)
            } catch (error) {
                console.log('Error');
            }
        }
        getTopComics()
    }, [])

    return (
        <div className='container mx-auto'>
            <section className="group/pagi relative w-full mt-2 md:mt-5 bg-[#f6f3ee] rounded-md overflow-hidden md:px-3 md:py-2 border-none sm:border sm:border-solid p-0">
                <div className='relative rounded-md bg-white w-full md:h-[350px] sm:h-[300px] h-[170px] border-none sm:border sm:border-solid overflow-hidden'>
                    {dataTrending.length > 0 ? (
                        <Swiper
                            ref={swiperRef}
                            loop={true}
                            className='h-full pb-3'
                            slidesPerView={7}
                            freeMode={true}
                            speed={2000}
                            autoplay={{
                                delay: 3500,
                                disableOnInteraction: false,
                                pauseOnMouseEnter: true
                            }}
                            pagination={{
                                clickable: true,
                                clickableClass: clsx("banner-pagination"),
                                bulletActiveClass: clsx("banner-pagination__active")
                            }}
                            modules={[Autoplay, Pagination, FreeMode]}
                            breakpoints={{
                                0: {
                                    slidesPerView: 2,
                                    slidesPerGroup: 2,
                                },
                                300: {
                                    slidesPerView: 3,
                                    slidesPerGroup: 3,
                                },
                                1024: {
                                    slidesPerView: 5,
                                    slidesPerGroup: 2,
                                },
                                1280: {
                                    slidesPerView: 6,
                                    slidesPerGroup: 1,
                                },
                                1536: {
                                    slidesPerView: 7,
                                    slidesPerGroup: 1,
                                }
                            }}
                        >
                            {
                                dataTrending.map(item => (
                                    <SwiperSlide key={item.id} className='w-full h-full md:p-2 p-0'>
                                        <CardComic data={item} type='normal' />
                                    </SwiperSlide>
                                ))
                            }
                        </Swiper>
                    ) : (
                        <div className='flex w-full h-full gap-4 md:p-2 md:pb-4 p-0'>
                            <Skeleton containerClassName='w-full h-full flex' />
                            <Skeleton containerClassName='w-full h-full flex' />
                            <Skeleton containerClassName='w-full h-full flex' />
                            <Skeleton containerClassName='w-full h-full lg:flex hidden' />
                            <Skeleton containerClassName='w-full h-full lg:flex hidden' />
                            <Skeleton containerClassName='w-full h-full xl:flex hidden' />
                            <Skeleton containerClassName='w-full h-full 2xl:flex hidden' />
                        </div>
                    )}
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

            </section>
        </div>
    )
}
export default BannerComics