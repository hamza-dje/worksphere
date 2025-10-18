"use client";
import Image from 'next/image'
import { useRouter } from 'next/navigation';

export default function NotFound() {
    const router = useRouter();
    return (
        <body>
            <div className='h-screen w-screen relative overflow-hidden'>
                <Image
                    src="/404/bg.png"
                    width={1700}
                    height={1000}
                    alt='Background'
                    className='h-full w-full object-cover max-sm:object-[49%_50%]'
                />

                <div className='absolute left-0 right-0 top-0 bottom-0 h-full w-full bg-gradient-to-r from-[rgba(0,0,0,0.75)] to-[rgba(0,0,0,0)] max-sm:opacity-50' />

                <h1 className='absolute top-[80px] left-1/2 -translate-x-1/2 text-yellow drop-shadow-[0_0_160px_oklch(from_var(--color-yellow)_l_c_h_/_0.6)] text-[200px] max-sm:text-[110px] max-sm:top-1/8 font-bold'>
                    404!
                </h1>

                <Image
                    src="/404/person.png"
                    width={1700}
                    height={1000}
                    alt='Background'
                    className='h-full w-full absolute left-0 top-0 object-cover max-sm:hidden'
                />

                <p className='absolute top-[540px] left-[50%] -translate-x-[50%] text-[23px] drop-shadow-[0_0_10px_rgba(0,0,0,1)] text-center text-white tracking-wide font-primary max-w-[640px] max-sm:text-lg max-sm:w-[calc(100vw-32px)]'>
                    It looks like we can not find what you are looking for!
                </p>

                <button
                    onClick={() => router.replace('/')}
                    className='absolute left-[50%] -translate-x-[50%] top-[670px] bg-white text-black text-sm cursor-pointer font-primary font-bold py-2.5 px-4 rounded-full'
                >
                    Back
                </button>
            </div>
        </body>
    );
}