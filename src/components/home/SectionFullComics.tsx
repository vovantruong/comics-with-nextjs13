'use client'
import { FC } from 'react'
import IconTitle from '../../../public/images/icon-full-book.png';
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, FreeMode, Grid } from 'swiper/modules';

interface SectionFullComicsProps { }

const SectionFullComics: FC<SectionFullComicsProps> = ({ }) => {
    return (
        <div className="w-full mt-5 bg-[#f6f3ee] rounded-md overflow-hidden sm:px-4 sm:py-5 p-2 border">
            <div className="flex items-end justify-between border-b-[3px] border-secondary pb-2 mb-2">
                <div className="text-gray-700 capitalize font-bold text-lg sm:text-2xl flex items-end gap-2">
                    <Image src={IconTitle} alt='icon-title' width={50} height={50} className='sm:w-[50px] sm:h-[50px] w-[35px] h-[35px]' />
                    <h2>Truyện full</h2>
                </div>
            </div>
            <div className="overflow-hidden rounded-md mt-5">
                <div className='relative rounded-md bg-white w-full border-none sm:border sm:border-solid overflow-hidden'>
                    <Swiper
                        slidesPerView={4}
                        freeMode={true}
                        grid={{
                            rows: 2,
                            fill: "row"
                        }}
                        pagination={{
                            clickable: true,
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
                            1280: {
                                slidesPerView: 4,
                                slidesPerGroup: 1,
                                grid: {
                                    rows: 2,
                                    fill: "row"
                                }
                            },
                        }}
                    >
                        {Array.from(Array(20).keys()).map(item => (
                            <SwiperSlide key={item} className='h-full w-full py-2 px-2'>
                                <div className='bg-slate-400 h-[300px] rounded-md border'>

                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </div>
    )
}
export default SectionFullComics