import React, { useEffect, useState } from 'react'

import cat from '../../../assets/png/feedback/catFB.png' // У кота сломаный svg
import starColor from '../../../assets/svg/feedback/StarColor.svg'
import starGray from '../../../assets/svg/feedback/StarGray.svg'

export default function SvgSmallFeedback(): JSX.Element {
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 640)
  const [isExtraSmallScreen, setIsExtraSmallScreen] = useState(window.innerWidth < 500)

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 640)
      setIsExtraSmallScreen(window.innerWidth < 500)
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <div className='lg:hidden flex flex-col justify-center items-center mt-4 relative'>
      <div className={`relative w-full flex justify-center items-center ${isExtraSmallScreen ? 'pb-[120%]' : 'pb-[100%]'} md:pb-[80%]`}>
        <svg className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ${isSmallScreen ? 'stroke-black-80 dark:stroke-white' : 'stroke-black-80 dark:stroke-black-80'}`} width="330" height="71" viewBox="0 0 330 71" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M329.014 35.6114C329.014 37.8316 327.947 40.0493 325.81 42.2477C323.67 44.4479 320.489 46.5944 316.349 48.6543C308.071 52.7734 296.059 56.4969 281.175 59.6292C251.415 65.8921 210.278 69.7697 164.824 69.7697C119.37 69.7697 78.2342 65.8921 48.4742 59.6292C33.5901 56.4969 21.5783 52.7734 13.2996 48.6543C9.15939 46.5944 5.97856 44.4479 3.83915 42.2477C1.70153 40.0493 0.634766 37.8316 0.634766 35.6114C0.634766 33.3913 1.70153 31.1735 3.83915 28.9751C5.97856 26.7749 9.15939 24.6285 13.2996 22.5685C21.5783 18.4494 33.5901 14.7259 48.4742 11.5936C78.2342 5.33071 119.37 1.45312 164.824 1.45312C210.278 1.45312 251.415 5.33071 281.175 11.5936C296.059 14.7259 308.071 18.4494 316.349 22.5685C320.489 24.6285 323.67 26.7749 325.81 28.9751C327.947 31.1735 329.014 33.3913 329.014 35.6114Z" />
        </svg> {/* Средняя эллипса*/}
        <svg className={`absolute top-[calc(50%-1.5rem)] left-1/2 transform -translate-x-1/2 -translate-y-1/2 ${isSmallScreen ? 'stroke-black-80 dark:stroke-white' : 'stroke-black-80 dark:stroke-black-80'}`} width="330" height="71" viewBox="0 0 330 71" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M329.014 35.6114C329.014 37.8316 327.947 40.0493 325.81 42.2477C323.67 44.4479 320.489 46.5944 316.349 48.6543C308.071 52.7734 296.059 56.4969 281.175 59.6292C251.415 65.8921 210.278 69.7697 164.824 69.7697C119.37 69.7697 78.2342 65.8921 48.4742 59.6292C33.5901 56.4969 21.5783 52.7734 13.2996 48.6543C9.15939 46.5944 5.97856 44.4479 3.83915 42.2477C1.70153 40.0493 0.634766 37.8316 0.634766 35.6114C0.634766 33.3913 1.70153 31.1735 3.83915 28.9751C5.97856 26.7749 9.15939 24.6285 13.2996 22.5685C21.5783 18.4494 33.5901 14.7259 48.4742 11.5936C78.2342 5.33071 119.37 1.45312 164.824 1.45312C210.278 1.45312 251.415 5.33071 281.175 11.5936C296.059 14.7259 308.071 18.4494 316.349 22.5685C320.489 24.6285 323.67 26.7749 325.81 28.9751C327.947 31.1735 329.014 33.3913 329.014 35.6114Z" />
        </svg> {/* Верхняя эллипса*/}
        <svg className={`absolute top-[calc(50%+1.5rem)] left-1/2 transform -translate-x-1/2 -translate-y-1/2 ${isSmallScreen ? 'stroke-black-80 dark:stroke-white' : 'stroke-black-80 dark:stroke-black-80'}`} width="330" height="71" viewBox="0 0 330 71" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M329.014 35.6114C329.014 37.8316 327.947 40.0493 325.81 42.2477C323.67 44.4479 320.489 46.5944 316.349 48.6543C308.071 52.7734 296.059 56.4969 281.175 59.6292C251.415 65.8921 210.278 69.7697 164.824 69.7697C119.37 69.7697 78.2342 65.8921 48.4742 59.6292C33.5901 56.4969 21.5783 52.7734 13.2996 48.6543C9.15939 46.5944 5.97856 44.4479 3.83915 42.2477C1.70153 40.0493 0.634766 37.8316 0.634766 35.6114C0.634766 33.3913 1.70153 31.1735 3.83915 28.9751C5.97856 26.7749 9.15939 24.6285 13.2996 22.5685C21.5783 18.4494 33.5901 14.7259 48.4742 11.5936C78.2342 5.33071 119.37 1.45312 164.824 1.45312C210.278 1.45312 251.415 5.33071 281.175 11.5936C296.059 14.7259 308.071 18.4494 316.349 22.5685C320.489 24.6285 323.67 26.7749 325.81 28.9751C327.947 31.1735 329.014 33.3913 329.014 35.6114Z" />
        </svg> {/* Нижняя эллипса*/}
        <img src={cat} alt='catFB' className='absolute top-[calc(50%-1.1rem)] left-[calc(50%-8rem)] transform -translate-x-1/2 -translate-y-1/2' /> {/*Котик*/}
        <img src={starColor} alt='starColor' className='absolute top-[calc(50%+8.2rem)] left-[calc(50%-3rem)] transform -translate-x-1/2 -translate-y-1/2' /> {/*Звезда цветная*/}
        <img src={starGray} alt='starGray' className='absolute top-[calc(50%+1.77rem)] left-[calc(50%+6.4rem)] transform -translate-x-1/2 -translate-y-1/2' /> {/*Звезда серая*/}
        <svg className={`absolute top-[calc(50%-7.2rem)] left-[calc(50%+4.5rem)] transform -translate-x-1/2 -translate-y-1/2 ${isSmallScreen ? 'fill-black-80 dark:fill-black-80 dark:stroke-white' : 'fill-[#F3F3F3] stroke-black-80'}`} width="195" height="205" viewBox="0 0 195 205" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M109.052 65.0515L109.22 65.9583L109.889 65.3229L155.77 21.7063L128.541 78.9019L128.146 79.7329L129.058 79.6126L191.77 71.3435L136.183 101.583L135.375 102.022L136.183 102.462L191.77 132.701L129.058 124.432L128.146 124.312L128.541 125.143L155.77 182.338L109.889 138.722L109.22 138.086L109.052 138.993L97.5242 201.297L85.9959 138.993L85.8281 138.086L85.1597 138.722L39.2787 182.338L66.507 125.143L66.9025 124.312L65.9902 124.432L3.27833 132.701L58.8657 102.462L59.6731 102.022L58.8657 101.583L3.27835 71.3435L65.9902 79.6126L66.9025 79.7329L66.507 78.9019L39.2787 21.7063L85.1597 65.3229L85.8281 65.9583L85.9959 65.0515L97.5242 2.74806L109.052 65.0515Z" />
        </svg>
      </div>
    </div>
  )
}
