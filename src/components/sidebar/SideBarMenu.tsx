'use client';

import { FC, MouseEventHandler, useCallback, useEffect, useState } from 'react'
import OutsideClickHandler from 'react-outside-click-handler'
import { IoCloseSharp } from 'react-icons/io5'
import { IoIosMenu, IoIosClose } from 'react-icons/io'
import { MdOutlineClose } from 'react-icons/md'

const SideBarMenu = () => {
    const [visible, setVisible] = useState<boolean>(false)
    return (
        <div>
            <button
                className='text-2xl p-2 rounded-md bg-linearPrimary text-white border mr-2'
                onClick={() => setVisible(true)}
            >
                {visible ? <MdOutlineClose /> : <IoIosMenu />}
            </button>
        </div>
    )
}
export default SideBarMenu