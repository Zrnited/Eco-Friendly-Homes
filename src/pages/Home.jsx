import React, { useEffect, useState } from 'react'
import Loader from '../components/Loader'
import Layout from '../components/Layout';
import herosectionCircle1 from '../assets/herosection-circle-1.png'
import herosectionCircle2 from '../assets/herosection-circle-2.png'
import herosectionFrame from '../assets/herosection-frame.png'
import herosectionFrame2 from '../assets/herosection-frame-2.png'

const Home = () => {

  const [loading, setLoading] = useState(true);

  const companyMetrics = [
    {
      users: {
        text: 'People who believe in our service',
        amount: '20k+'
      }
    },
    {
      properties: {
        text: 'Property and house ready for occupancy',
        amount: '3.2k+'
      }
    },
    {
      partners: {
        text: 'Partners who have worked with us',
        amount: '1.1k+'
      }
    }
  ]

  useEffect(()=>{
    setTimeout(()=>{
      setLoading(false);
    }, 3000)
  }, [])

  return (
    <>
      {
        loading ? (
          <Loader />
        ) : (
          <Layout>
            {/* all infos */}
            <section className='h-[736px] bg-[#262626] relative text-white px-5 pt-20 overflow-hidden flex flex-col sm:h-auto sm:pb-10 sm:flex-row md:pt-28 lg:justify-center'>
              <img 
                src={herosectionCircle1}
                alt='broken-circle'
                className='absolute -right-3 top-48 md:hidden'
              />
              <img 
                src={herosectionCircle2}
                alt='broken-circle'
                className='hidden absolute -right-3 top-20 md:flex'
              />
              <div className='py-10 px-6 flex flex-col gap-4 items-center justify-center z-10 sm:w-1/2 sm:items-start lg:w-[550px]'>
                <h1 className='capitalize text-center text-2xl font-medium sm:text-left md:text-3xl lg:text-4xl'>find your sustainable dream home here</h1>
                <p className='text-slate-200 text-xs text-center sm:text-justify md:text-base md:text-left lg:text-lg'>Reduce the negative impact that daily activities have on your environment with our eco-friendly homes which are designed to be energy-efficient for a sustainable living.</p>
                <button className='w-[89px] h-[46px] bg-[#6E8C03] rounded-md hover:opacity-95 transition ease-in-out delay-100'>
                  Explore
                </button>
              </div>

              <div className='z-10 flex justify-center items-center sm:w-1/2 lg:w-[540px]'>
                <img 
                  src={herosectionFrame}
                  alt='frame-img'
                  className='sm:w-full md:hidden'
                />
                <img 
                  src={herosectionFrame2}
                  alt='frame-img'
                  className='hidden md:flex md:w-full'
                />
              </div>
            </section>

            <section></section>
          </Layout>
        )}
    </>
  )
}

export default Home