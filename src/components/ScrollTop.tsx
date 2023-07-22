'use client';
import { ImArrowUp2 } from 'react-icons/im'
import { useEffect, useState } from 'react'
import clsx from 'clsx';

const ScrollTop = ({ }) => {
    const [visible, setVisible] = useState(false)

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 250) {
                setVisible(true)
            } else {
                setVisible(false)
            }
        })
    }, [])

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth', // for smoothly scrolling
        })
    }

    return (
        <button
            onClick={scrollToTop}
            className={clsx(
                'fixed -bottom-10 right-10 block w-[45px] h-[45px] leading-[45px] bg-secondary border rounded-md text-white invisible',
                'opacity-0 scale-[0.3] shadow-md z-[100] transition-all duration-300 hover:-translate-y-2.5 flex items-center justify-center',
                { '!visible bottom-10 right-10 opacity-100 !scale-100': visible })
            }>
            <ImArrowUp2 />
        </button>
    )
}
export default ScrollTop