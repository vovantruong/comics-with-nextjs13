'use client';

import { useState } from 'react'
import { IoClose } from 'react-icons/io5'
import { IoIosMenu } from 'react-icons/io'
import { MdOutlineClose } from 'react-icons/md'
import { genresProps } from '@/types/typeProps';
import clsx from 'clsx';
import Link from 'next/link';
import Image from 'next/image';
import Logo from '../../../public/images/truyen-logo-2.png'
import { BsFacebook, BsGithub, BsGoogle, BsTelegram } from 'react-icons/bs';


interface sidebarProps {
    data: genresProps[]
}


const SideBarMenu = ({ data }: sidebarProps) => {
    const [visible, setVisible] = useState<boolean>(false)
    return (
        <div className='relative'>
            <button
                className='text-2xl p-2 rounded-md bg-linearPrimary text-white border mr-2'
                onClick={() => setVisible(true)}
            >
                {visible ? <MdOutlineClose /> : <IoIosMenu />}
            </button>
            <div className={clsx(
                { "!opacity-100 !visible": visible },
                'fixed top-0 left-0 z-[1000] w-full h-full opacity-0 invisible transition-all duration-500 ease-in-out, flex'
            )}>
                <div className='absolute w-full h-full top-0 left-0 z-0 bg-[rgba(0,0,0,0.3)]' onClick={() => setVisible(false)}></div>
                <div className={clsx(
                    { "transition-all duration-500 delay-100 !right-0 ease-in-out": visible },
                    ' bg-white shadow-md w-full md:w-[50%] h-screen z-10 absolute pt-5 p-5 overflow-hidden top-0 right-[-100%] transition-all duration-500'
                )}>
                    <button className='absolute right-6 top-5 text-4xl text-slate-400' onClick={() => setVisible(false)}><IoClose /></button>
                    <div className="flex items-start mx-1 w-full flex-col pb-4 mb-6 border-b">
                        <Link href="/" className="py-1 w-[180px]">
                            <Image src={Logo} alt="Logo" height={50} className="w-full h-full" priority />
                        </Link>
                        <span className='text-slate-400 text-sm inline-block text-center w-full'>Web truyện hay - Đủ thể loại - Cập nhật mới nhất</span>
                    </div>
                    <div className='w-full text-center mb-4 text-sm text-slate-400'>
                        <p>Copyrights &copy; {new Date().getFullYear()} by Gavin Dev</p>
                    </div>
                    <div className='flex items-center w-full justify-center gap-3'>
                        <Link href="https://www.facebook.com/vvtruong.1007" className='text-4xl px-1 text-blue-500'><BsFacebook /></Link>
                        <Link href="https://github.com/vocantruong" className='text-4xl px-1 text-gray-900'><BsGithub /></Link>
                        <Link href="https://t.me/Gavin_Vo" className='text-4xl px-1 text-cyan-500'><BsTelegram /></Link>
                        <Link href="https://google.com" className='text-4xl px-1 text-orange-600'><BsGoogle /></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default SideBarMenu