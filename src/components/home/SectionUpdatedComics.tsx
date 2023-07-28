import Image from 'next/image'
import { FC } from 'react'
import IconTitle from '../../../public/images/icon-updated-book.png';

interface SectionUpdatedComicsProps { }

const SectionUpdatedComics: FC<SectionUpdatedComicsProps> = ({ }) => {
    return (
        <div className="w-full mt-5 bg-[#f6f3ee] rounded-md overflow-hidden sm:px-4 sm:py-5 p-2 border">
            <div className="flex items-end justify-between border-b-[3px] border-secondary pb-2 mb-2">
                <div className="text-gray-700 capitalize font-bold text-lg sm:text-2xl flex items-end gap-2">
                    <Image src={IconTitle} alt='icon-title' width={50} height={50} className='sm:w-[50px] sm:h-[50px] w-[35px] h-[35px]' />
                    <h2>Truyện mới cập nhật</h2>
                </div>
            </div>
            <div className="overflow-hidden rounded-md mt-5">
                Comics
            </div>
        </div>
    )
}
export default SectionUpdatedComics