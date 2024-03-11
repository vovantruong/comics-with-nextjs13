import Progressbar from '@/components/Progressbar'
import React from 'react'


function Loading() {
    return (
        <>
            <Progressbar />
            <main className='min-h-screen fixed top-0 left-0 right-0 bottom-0 bg-primary'>
                <div className='flex items-center justify-center relative h-full'>
                    <span
                        className='loader-spin'>
                    </span>
                </div>
            </main>
        </>
    )
}

export default Loading