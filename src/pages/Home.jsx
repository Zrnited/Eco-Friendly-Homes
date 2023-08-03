import React, { useEffect, useState } from 'react';
import Loader from '../components/Loader';
import Layout from '../components/Layout';
import herosectionCircle1 from '../assets/herosection-circle-1.png';
import herosectionCircle2 from '../assets/herosection-circle-2.png';
import serviceCircle1 from '../assets/service-circle-1.png';
import serviceCircle2 from '../assets/service-circle-2.png';
import herosectionFrame from '../assets/herosection-frame.png';
import herosectionFrame2 from '../assets/herosection-frame-2.png';
import serv1 from '../assets/serv6.png';
import serv2 from '../assets/serv7.png';
import serv3 from '../assets/serv8.png';
import serv4 from '../assets/serv9.png';
import serv5 from '../assets/serv10.png';

const Home = () => {

  const [loading, setLoading] = useState(true);

  const companyMetrics = [
    {
      info: {
        text: 'People who believe in our service',
        amount: '20k+'
      }
    },
    {
      info: {
        text: 'Property and house ready for occupancy',
        amount: '3.2k+'
      }
    },
    {
      info: {
        text: 'Partners who have worked with us',
        amount: '1.1k+'
      }
    }
  ]

  const companyOffers = [
    {
      image: serv1,
      title: 'Stylish Environment',
      desc: 'We believe in creating a sustainable future and want to help our clients live in homes that are not only good for the environment but also comfortable'
    },
    {
      image: serv2,
      title: 'Clients Consultancy',
      desc: 'We offer consultations to help clients understand what eco-friendly features to look for (tiny houses to large family homes and  how to maintain them'
    },
    {
      image: serv3,
      title: 'Eco - Friendly',
      desc: 'We work with builders and architects who share our vision; featuring homes that meet eco-friendly standards such as solar panels, rainwater harvesting, e.t.c'
    },
    {
      image: serv4,
      title: 'Customer Relations',
      desc: 'We cater to environmentally conscious individuals and families who want to reduce their carbon footprint while still enjoying the convenience of living.'
    },
    {
      image: serv5,
      title: 'Middle Man Service',
      desc: 'We also work with clients who want to build a custom eco-friendly home, connecting them with architects and builders who specialize in green building.'
    },
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

            <section className='flex flex-col items-center py-10 px-5 relative'>
              <img 
                src={serviceCircle2}
                alt='icon'
                className='absolute left-0 -z-10 lg:hidden'
              />
              <img 
                src={serviceCircle1}
                alt='icon'
                className='hidden absolute left-0 -z-10 lg:flex'
              />

              <div className='flex flex-col gap-4 items-center justify-center sm:flex-row sm:gap-6 md:gap-8 lg:gap-16'>
                {
                  companyMetrics?.map((metric)=>{
                    return (
                      <div className='flex flex-row items-center gap-4 w-[160px] md:w-[220px]'>
                        <h1 className='text-xl font-semibold md:text-2xl'>
                          {metric.info.amount}
                        </h1>
                        <p className='text-[13px] md:text-lg'>{metric.info.text}</p>
                      </div>
                    )
                  })
                }
              </div>

              <main className='py-8 text-sm font-semibold flex flex-col justify-center items-center'>
                <div className='flex flex-col gap-2 items-center justify-center mb-8 text-center w-[85%] lg:mb-14 mt-14 lg:w-[70%]'>
                 <p className='uppercase bg-[#FEEBE7] text-[#F2380F] w-[45%] py-0.5 rounded-md tracking-wide md:text-lg  md:w-auto md:px-3'>our services</p>
                 <h1 className='text-[19px] leading-snug font-semibold tracking-wide md:text-2xl'>Discover the Benefits of Sustainable Living with Our Eco-Friendly Homes</h1> 
                </div>

                <div className='flex flex-row gap-x-3 gap-y-5 flex-wrap justify-center lg:gap-x-10 lg:gap-y-12'>
                  {
                    companyOffers?.map((offer)=>{
                      return (
                        <div className='flex flex-col items-center gap-1 text-center border border-gray-100 w-[167px] rounded-md p-2.5 md:w-[350px] lg:w-[300px]'>
                          <div className='w-[40px] h-[40px] rounded-md bg-[#FEEBE7] flex items-center justify-center md:h-[65px] md:w-[65px]'>
                            <img 
                              src={offer.image}
                              alt='icon'
                              className='w-[24px] md:w-[40px]'
                            />
                          </div>
                          <h1 className='md:text-lg'>
                            { offer.title }
                          </h1>
                          <p className='text-[10px] leading-tight font-normal md:text-base'>
                            {offer.desc}
                          </p>
                        </div>
                      )
                    })
                  }
                </div>
              </main>

              <button className='w-[212px] py-2 bg-[#6E8C03] text-white rounded-md font-medium place-content-center hover:opacity-90 transition ease-in-out delay-100'>
                Schedule a consultation
              </button>
            </section>
          </Layout>
        )}
    </>
  )
}

export default Home