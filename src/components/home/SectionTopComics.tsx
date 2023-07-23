'use client'

import { comicsProps } from '@/types/typeProps'
import { FC, useEffect, useState } from 'react'
import CardComic from '@/components/CardComic';
import IconTitle from '../../../public/images/light-book.png';
import Image from 'next/image'
import Skeleton from 'react-loading-skeleton';
import { getTopComics } from '@/utils/services';
import Select from 'react-select';

interface SectionTopComicsProps { }

const options: selectProps[] = [
    { value: 'all', label: 'Tất cả' },
    { value: 'daily', label: 'Top ngày' },
    { value: 'weekly', label: 'Top tuần' },
    { value: 'monthly', label: 'Top tháng' },
    { value: 'follow', label: 'Top theo dõi' },
    { value: 'comment', label: 'Top bình luận' },
    { value: 'chapter', label: 'Top chapter' },
];

const styleSelect = {
    control: (provided: any, state: any) => ({
        display: 'flex',
        height: '100%',
        width: '100%',
        cursor: 'text',
        overflow: 'hidden',
        "&:hover": {
            cursor: 'pointer'
        }
    }),
    indicatorSeparator: () => ({}),
    singleValue: (base: any) => ({
        ...base,
        fontWeight: "600",
        color: "#374157"
    })
}

interface selectProps {
    value: string
    label: string
}

type selectTopProps = selectProps | null

const SectionTopComics: FC<SectionTopComicsProps> = ({ }) => {
    const [dataTopComics, setDataTopComic] = useState<comicsProps[]>([])
    const [selectedOption, setSelectedOption] = useState<selectTopProps>(options[3]);

    useEffect(() => {
        const handleDataGetTopComics = async () => {
            try {
                const res = await getTopComics({ type: selectedOption?.value, limit: 11, })
                setDataTopComic(res)
            } catch (error) {
                console.log('Error');
            }
        }
        handleDataGetTopComics()
    }, [selectedOption])

    return (
        <div className="w-full mt-5 bg-[#f6f3ee] rounded-md overflow-hidden px-4 py-5 border">
            <div className="flex items-end justify-between border-b-[3px] border-secondary pb-2 mb-2">
                <div className="text-gray-700 capitalize font-bold text-2xl flex items-end gap-2">
                    <Image src={IconTitle} alt='icon-title' width={50} height={50} />
                    <h2>Truyện đề cử</h2>
                </div>
                <Select
                    styles={styleSelect}
                    className='bg-white h-10 w-[240px] font-medium rounded-md border border-solid border-gray-200 outline-none z-10'
                    value={selectedOption}
                    defaultValue={selectedOption}
                    placeholder="Tất cả"
                    onChange={setSelectedOption}
                    options={options}
                    instanceId={"type-trend"}
                    theme={(theme) => ({
                        ...theme,
                        colors: {
                            ...theme.colors,
                            primary: '#FFB31C',
                            primary25: "#ffeecb"
                        }
                    })}
                />
            </div>
            <div className="overflow-hidden h-[416px] sm:block hidden rounded-md mt-5">
                {
                    dataTopComics.length > 0 ? (
                        dataTopComics.map((item) => (
                            <div key={item.id} className='first:h-[396px] md:first:w-[260px] 2xl:first:w-[270px] first:w-[230px] float-left h-[192px] 2xl:w-[132px] relative  
                                mt-3 ml-3 lg:w-[155px] xl:w-[126px] md:w-[128px] sm:w-[150px] w-[120px] rounded-md transition group'
                            >
                                <CardComic data={item} type='basic' />
                            </div>
                        ))

                    ) : (
                        <LoadingSkeleton />
                    )
                }
            </div>
            <div className='sm:hidden block'>
                Slide truyen de cu
            </div>
        </div>
    )
}

function LoadingSkeleton() {
    return (
        Array.from(Array(11).keys()).map(item => (
            <div key={item} className='first:h-[396px] md:first:w-[260px] 2xl:first:w-[270px] first:w-[230px] float-left h-[192px] 2xl:w-[132px] relative 
                                mt-3 ml-3 lg:w-[155px] xl:w-[126px] md:w-[128px] sm:w-[150px] w-[120px] rounded-md overflow-hidden border-2'
            >
                <Skeleton containerClassName='w-full h-full flex' />
            </div>
        ))
    )
}

export default SectionTopComics