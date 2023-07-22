'use client'

import { FC, MouseEventHandler, useState } from 'react'
import OutsideClickHandler from 'react-outside-click-handler'
import Link from 'next/link'
import { FiChevronDown } from 'react-icons/fi'
import clsx from 'clsx'

interface DropdownMenuProps {
    children: React.ReactNode
    title: string
    className?: string
    wrapperClassName?: string
    titleClassName?: string
    visible: boolean
    setVisible: (value: boolean) => void
}

const DropdownMenu: FC<DropdownMenuProps> = ({ title, children, className, wrapperClassName, titleClassName, visible, setVisible }) => {

    return (
        <OutsideClickHandler onOutsideClick={() => setVisible(false)}>
            <div className={clsx(className, "relative")}>
                <div
                    className={clsx(titleClassName, "cursor-pointer flex items-center gap-1 font-semibold text-sm leading-20 relative text-heading")}
                    onClick={() => setVisible(!visible)}
                >
                    {title}
                    <span><FiChevronDown /></span>
                </div>
                <div className={clsx(
                    wrapperClassName,
                    'absolute top-[100%] left-[50%] bg-white rounded-md shadow-md p-2 z-10 min-w-[150px] invisible w-full animate-hidden-dropdown',
                    { "!visible animate-show-dropdown": visible }
                )}>
                    {children}
                </div>
            </div>
        </OutsideClickHandler>
    )
}
export default DropdownMenu