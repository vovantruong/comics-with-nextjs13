import Progressbar from '@/components/Progressbar'
import React from 'react'


function Loading() {
    return (
        <>
            <Progressbar />
            <main className='w-full h-[90vh]'>
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