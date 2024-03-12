import Progressbar from '@/components/Progressbar'
import React from 'react'


function LoadingPage() {
    return (
        <>
            <Progressbar />
            <main className='w-full h-screen bg-primary'>
                <div className='flex items-center justify-center relative h-full'>
                    <span
                        className='loader-spin'>
                    </span>
                </div>
            </main>
        </>
    )
}

export default LoadingPage