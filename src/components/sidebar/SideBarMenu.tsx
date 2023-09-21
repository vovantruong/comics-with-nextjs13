'use client';

import { FC, MouseEventHandler, useCallback, useEffect, useState } from 'react'
import OutsideClickHandler from 'react-outside-click-handler'
import { IoClose, IoCloseSharp } from 'react-icons/io5'
import { IoIosMenu, IoIosClose } from 'react-icons/io'
import { MdOutlineClose } from 'react-icons/md'
import { genresProps } from '@/types/typeProps';
import clsx from 'clsx';

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
                    ' bg-white shadow-md w-full md:w-[50%] h-screen z-10 absolute pt-10 p-5 overflow-hidden top-0 right-[-100%] transition-all duration-500'
                )}>
                    <button className='absolute right-6 top-5 text-3xl text-slate-400' onClick={() => setVisible(false)}><IoClose /></button>
                </div>
            </div>
        </div>
    )
}
export default SideBarMenu