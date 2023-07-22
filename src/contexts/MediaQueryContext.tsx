'use client'
import React, { createContext } from 'react'
import { useMediaQuery } from 'react-responsive'


interface MediaQueryProps {
    children: React.ReactNode
}

interface queryProps {
    lg?: boolean
    md?: boolean
    sm?: boolean
}

const MediaQueryContext = createContext<queryProps>({})

function MediaQueryProvider({ children }: MediaQueryProps) {
    const isDesktop = useMediaQuery({ query: `(max-width: 1179px)` })
    const isTablet = useMediaQuery({ query: `(max-width: 1023px)` })
    const isMobile = useMediaQuery({ query: `(max-width: 739px)` })

    const breakpoint = {
        lg: isDesktop,
        md: isTablet,
        sm: isMobile
    }

    return <MediaQueryContext.Provider value={breakpoint}>{children}</MediaQueryContext.Provider>
}

export { MediaQueryContext, MediaQueryProvider }
