import React, { useEffect, useState } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import Loader from '../components/Loader';
import Layout from '../components/Layout';
import herosectionCircle1 from '../assets/herosection-circle-1.png';
import herosectionCircle2 from '../assets/herosection-circle-2.png';
import serviceCircle1 from '../assets/service-circle-1.png';
import serviceCircle2 from '../assets/service-circle-2.png';
import herosectionFrame from '../assets/herosection-frame.png';
import herosectionFrame2 from '../assets/herosection-frame-2.png';
import location from '../assets/location.png';
import dollarCircle from '../assets/dollar-circle.png';
import house from '../assets/house.png';
import serv1 from '../assets/serv6.png';
import serv2 from '../assets/serv7.png';
import serv3 from '../assets/serv8.png';
import serv4 from '../assets/serv9.png';
import serv5 from '../assets/serv10.png';
import house1 from '../assets/house1.png';
import house2 from '../assets/house2.png';
import house3 from '../assets/house3.png';
import house4 from '../assets/house4.png';
import house5 from '../assets/house5.png';
import house6 from '../assets/house6.png';
import bedIcon from '../assets/bed-icon.png';
import bathIcon from '../assets/bath-icon.png';
import areaIcon from '../assets/area-icon.png';
import { Link } from 'react-router-dom';
import { BsChevronLeft } from 'react-icons/bs';
import { BsChevronRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';

const Home = () => {

  const [loading, setLoading] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);

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

  const companyProperties = [
    {
      img: house1,
      name: 'Philadelphia Castle',
      location: 'Ikeja, Lagos',
      price: '$47,000',
      attributes: {
        beds: 5,
        bathroom: 3,
        area: 2000
      },
      other: '...'
    },
    {
      img: house2,
      name: 'Camp Nou',
      location: 'Ajah, Lagos',
      price: '$42,000',
      attributes: {
        beds: 4,
        bathroom: 4,
        area: 1500
      },
      other: '...'
    },
    {
      img: house3,
      name: "McDonald's Arena",
      location: 'VGC, Lagos',
      price: '$65,000',
      attributes: {
        beds: 3,
        bathroom: 3,
        area: 1200
      },
      other: '...'
    },
  ]

  // const moreCompanyProperties = [
  //   {
  //     img: house4,
  //     name: 'Philadelphia Castle',
  //     location: 'Ikeja, Lagos',
  //     price: '$47,000',
  //     attributes: {
  //       beds: 5,
  //       bathroom: 3,
  //       area: 2000
  //     },
  //     other: '...'
  //   },
  //   {
  //     img: house5,
  //     name: 'Camp Nou',
  //     location: 'Ajah, Lagos',
  //     price: '$42,000',
  //     attributes: {
  //       beds: 4,
  //       bathroom: 4,
  //       area: 1500
  //     },
  //     other: '...'
  //   },
  //   {
  //     img: house6,
  //     name: "McDonald's Arena",
  //     location: 'VGC, Lagos',
  //     price: '$65,000',
  //     attributes: {
  //       beds: 3,
  //       bathroom: 3,
  //       area: 1200
  //     },
  //     other: '...'
  //   },

  //   {
  //     img: house5,
  //     name: 'New Castle',
  //     location: 'Somolu, Lagos',
  //     price: '$88,000',
  //     attributes: {
  //       beds: 6,
  //       bathroom: 9,
  //       area: 3000
  //     },
  //     other: '...'
  //   },
  //   {
  //     img: house6,
  //     name: 'Old Traford',
  //     location: 'Allen Avenue, Lagos',
  //     price: '$52,000',
  //     attributes: {
  //       beds: 6,
  //       bathroom: 8,
  //       area: 2800
  //     },
  //     other: '...'
  //   },
  //   {
  //     img: house4,
  //     name: "Eagle's Square",
  //     location: 'Surulere, Lagos',
  //     price: '$65,000',
  //     attributes: {
  //       beds: 4,
  //       bathroom: 6,
  //       area: 1200
  //     },
  //     other: '...'
  //   },

  //   {
  //     img: house6,
  //     name: 'Obas palace',
  //     location: 'Agege, Lagos',
  //     price: '$38,000',
  //     attributes: {
  //       beds: 6,
  //       bathroom: 7,
  //       area: 1200
  //     },
  //     other: '...'
  //   },
  //   {
  //     img: house4,
  //     name: 'Kings Court',
  //     location: 'Yaba, Lagos',
  //     price: '$32,000',
  //     attributes: {
  //       beds: 3,
  //       bathroom: 5,
  //       area: 1000
  //     },
  //     other: '...'
  //   },
  //   {
  //     img: house5,
  //     name: "Peckerwood",
  //     location: 'Iyana-Ipaja, Lagos',
  //     price: '$25,000',
  //     attributes: {
  //       beds: 2,
  //       bathroom: 4,
  //       area: 900
  //     },
  //     other: '...'
  //   },
  // ]

  const moreCompaniesProp = [
    {
      id: 0,
      data: [
        {
          img: house4,
          name: 'Philadelphia Castle',
          location: 'Ikeja, Lagos',
          price: '$47,000',
          attributes: {
            beds: 5,
            bathroom: 3,
            area: 2000
          },
          other: '...'
        },
        {
          img: house5,
          name: 'Camp Nou',
          location: 'Ajah, Lagos',
          price: '$42,000',
          attributes: {
            beds: 4,
            bathroom: 4,
            area: 1500
          },
          other: '...'
        },
        {
          img: house6,
          name: "McDonald's Arena",
          location: 'VGC, Lagos',
          price: '$65,000',
          attributes: {
            beds: 3,
            bathroom: 3,
            area: 1200
          },
          other: '...'
        },
      ]
    },
    {
      id: 1,
      data: [
        {
          img: house5,
          name: 'New Castle',
          location: 'Somolu, Lagos',
          price: '$88,000',
          attributes: {
            beds: 6,
            bathroom: 9,
            area: 3000
          },
          other: '...'
        },
        {
          img: house6,
          name: 'Old Traford',
          location: 'Allen Avenue, Lagos',
          price: '$52,000',
          attributes: {
            beds: 6,
            bathroom: 8,
            area: 2800
          },
          other: '...'
        },
        {
          img: house4,
          name: "Eagle's Square",
          location: 'Surulere, Lagos',
          price: '$65,000',
          attributes: {
            beds: 4,
            bathroom: 6,
            area: 1200
          },
          other: '...'
        },
      ]
    },
    {
      id: 2,
      data: [
        {
          img: house6,
          name: 'Obas palace',
          location: 'Agege, Lagos',
          price: '$38,000',
          attributes: {
            beds: 6,
            bathroom: 7,
            area: 1200
          },
          other: '...'
        },
        {
          img: house4,
          name: 'Kings Court',
          location: 'Yaba, Lagos',
          price: '$32,000',
          attributes: {
            beds: 3,
            bathroom: 5,
            area: 1000
          },
          other: '...'
        },
        {
          img: house5,
          name: "Peckerwood",
          location: 'Iyana-Ipaja, Lagos',
          price: '$25,000',
          attributes: {
            beds: 2,
            bathroom: 4,
            area: 900
          },
          other: '...'
        },
      ]
    }
  ]

  const prevProp = () => {
    // let firstProp = ''
    // if(currentIndex === 0){
    //   firstProp === currentIndex
    // }
    const firstPropSet = currentIndex === 0;
    const newIndex = firstPropSet ? moreCompaniesProp?.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  }

  const nextProp = () => {
    const lastPropSet = currentIndex === moreCompaniesProp?.length - 1;
    const newIndex = lastPropSet ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  }

  const goToSlide = (slideIndex) =>{
    setCurrentIndex(slideIndex)
  }

  useEffect(()=>{
    setTimeout(()=>{
      setLoading(false);
    }, 3000)
  }, [])

  useEffect(()=>{
    const slideInterval = setInterval(nextProp, 2500);
    return () => clearInterval(slideInterval);
  })

  useEffect(()=>{
    Aos.init();
    Aos.refresh();
  },[])

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
              
              {/* Searchbar */}
              <div className='hidden sm:flex sm:flex-col items-center bg-white shadow-lg w-[85%] p-5 rounded-md absolute -top-5 max-w-[1000px]'>
                <div className='text-start w-full'>
                  <h1 className='font-semibold mb-3 text-lg'>Search by filter</h1>
                </div>
                <form className='flex flex-row gap-2'>
                    <div className='flex flex-row items-center h-[40px]'>
                        <label className='w-[40px] border border-slate-300 h-full rounded-l-lg flex justify-center items-center'>
                            <div className='h-[30px] flex justify-center items-center w-[30px] bg-[#FEEBE7] rounded-full'>
                                <img 
                                    src={location}
                                    alt='location-icon'
                                    className='w-[17px]'
                                />
                            </div>
                        </label>
                        <div className='flex-1 h-full w-full'>
                            <input 
                                placeholder='Location'
                                type='text'
                                className='border rounded-r-lg h-full px-3 w-full focus:outline-none focus:shadow'
                            />
                        </div>
                    </div>
                    <div className='flex flex-row items-center h-[40px]'>
                        <label className='w-[40px] border border-slate-300 h-full rounded-l-lg flex justify-center items-center'>
                            <div className='h-[30px] flex justify-center items-center w-[30px] bg-[#FEEBE7] rounded-full'>
                                <img 
                                    src={house}
                                    alt='location-icon'
                                    className='w-[17px]'
                                />
                            </div>
                        </label>
                        <div className='flex-1 h-full w-full'>
                            <input 
                                placeholder='Property Type'
                                type='text'
                                className='border rounded-r-lg h-full px-3 w-full focus:outline-none focus:shadow'
                            />
                        </div>
                    </div>
                    <div className='flex flex-row items-center h-[40px]'>
                        <label className='w-[40px] border border-slate-300 h-full rounded-l-lg flex justify-center items-center'>
                            <div className='h-[30px] flex justify-center items-center w-[30px] bg-[#FEEBE7] rounded-full'>
                                <img 
                                    src={dollarCircle}
                                    alt='location-icon'
                                    className='w-[17px]'
                                />
                            </div>
                        </label>
                        <div className='flex-1 h-full w-full'>
                            <input 
                                placeholder='Budget'
                                type='text'
                                className='border rounded-r-lg h-full px-3 w-full focus:outline-none focus:shadow'
                            />
                        </div>
                    </div>
                    <button className='px-2 py-2 text-center bg-[#6E8C03] text-white rounded-md hover:opacity-90 transition ease-in-out delay-100 lg:w-[140px]'>
                        Search
                    </button>
                </form>
              </div>

              <div className='flex flex-col gap-4 items-center justify-center sm:flex-row sm:gap-6 sm:mt-24 md:gap-8 lg:gap-16'>
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

              <button className='w-[212px] py-2 bg-[#6E8C03] text-white rounded-md font-medium place-content-center hover:opacity-90 transition ease-in-out delay-100 lg:text-lg lg:w-[280px]'>
                Schedule a consultation
              </button>
            </section>

            <section className='bg-[#F6F6F6] w-full flex flex-col items-center py-6 px-3'>
              <div className='flex flex-col gap-2 items-center justify-center text-center w-[95%] lg:mb-10 lg:w-[70%]'>
                <p className='uppercase bg-[#FEEBE7] text-[#F2380F] w-[45%] text-sm font-semibold py-0.5 rounded-md md:text-lg sm:w-auto sm:px-3'>our properties</p>
                <h1 className='text-[19px] leading-snug font-semibold tracking-wide md:text-2xl'>Browse Our Wide Selection of Premium Properties</h1> 
              </div>

              {/* Company's properties for mobile */}
              <div className='flex flex-col gap-5 py-5 sm:hidden'>
                {
                  companyProperties?.map((ppt)=>{
                    return (
                      <div className='flex flex-col gap-2 bg-white rounded-md drop-shadow-md'data-aos='zoom-in' data-aos-duration='800' data-aos-easing='ease-in-quad'>
                        <img 
                          src={ppt.img}
                          alt='prop-img'
                        />
                        <div className='flex flex-col gap-1 px-3'>
                          <h1 className='font-semibold text-[17px]'>{ppt.name}</h1>
                          <div className='flex flex-row gap-1'>
                            <img 
                              src={location}
                              className='w-[18px] h-[18px]'
                            />
                            <p className='text-sm text-gray-500'>{ppt.location}</p>
                          </div>
                          <div className='flex flex-row gap-4'>
                            <div className='flex flex-row gap-3 items-center'>
                              <div className='w-[26px] h-[26px] bg-[#FEEBE7] rounded-full flex justify-center items-center'>
                                <img 
                                  src={bedIcon}
                                  alt='bed-icon'
                                />
                              </div>
                              <p className='text-sm text-gray-500'>{`${ppt.attributes.beds} Beds`}</p>
                            </div>
                            <div className='flex flex-row gap-3 items-center'>
                              <div className='w-[26px] h-[26px] bg-[#FEEBE7] rounded-full flex justify-center items-center'>
                                <img 
                                  src={bathIcon}
                                  alt='bed-icon'
                                />
                              </div>
                              <p className='text-sm text-gray-500'>{`${ppt.attributes.bathroom} Baths`}</p>
                            </div>
                            <div className='flex flex-row gap-3 items-center'>
                              <div className='w-[26px] h-[26px] bg-[#FEEBE7] rounded-full flex justify-center items-center'>
                                <img 
                                  src={areaIcon}
                                  alt='bed-icon'
                                />
                              </div>
                              <p className='text-sm text-gray-500'>{`${ppt.attributes.area} Sq. ft`}</p>
                            </div>
                          </div>
                        </div>

                        <hr className='border-gray-400 mt-1 px-2 place-self-center w-[95%]' />
                        
                        <div className='flex flex-row justify-between items-center px-3 pb-3'>
                          <h1 className='font-semibold text-lg'>{ppt.price}</h1>
                          <Link to={'/'} className='text-[#6E8C03] font-semibold'>
                            View Details
                          </Link>
                        </div>
                      </div>
                    )
                  })
                }
              </div>

              {/* Company's properties for desktop */}
              <div className='hidden w-full justify-end mt-5 gap-3 sm:flex lg:mt-0 xl:pr-14'>
                <button onClick={prevProp} className='p-2 rounded-[5px] bg-[#6E8C03] text-white focus:outline-none'>
                  <BsChevronLeft />
                </button>
                <button onClick={nextProp} className='p-2 rounded-[5px] bg-[#6E8C03] text-white focus:outline-none'>
                  <BsChevronRight />
                </button>
              </div>

              <div className="hidden relative py-5  overflow-hidden sm:flex sm:flex-row sm:gap-4 sm:w-full lg:justify-center xl:gap-7">
                {
                  moreCompaniesProp[currentIndex].data?.map((prop, propkey)=>{
                    return (
                      // <div key={propkey} className='w-auto flex transition-transform ease-out duration-500 lg:max-w-[330px]' style={{transform: `translateX(-${currentIndex * 1}%)`}}>
                      // </div>
                        <div data-aos='zoom-in' data-aos-duration='800' data-aos-easing='ease-in-quad' key={propkey} className='flex flex-col gap-2 bg-white rounded-md drop-shadow-md w-auto transition-transform ease-out duration-500 lg:max-w-[330px]' style={{transform: `translateX(-${currentIndex * 0}%)`}}>
                          <img 
                            src={prop.img}
                            alt='prop-img'
                          />
                          <div className='flex flex-col gap-1 px-3'>
                            <h1 className='font-semibold text-[17px]'>{prop.name}</h1>
                            <div className='flex flex-row gap-1'>
                              <img 
                                src={location}
                                className='w-[18px] h-[18px]'
                              />
                              <p className='text-sm text-gray-500'>{prop.location}</p>
                            </div>
                            <div className='flex flex-row gap-4 sm:flex-col sm:gap-1 lg:flex-row lg:gap-2'>
                              <div className='flex flex-row gap-3 items-center'>
                                <div className='w-[26px] h-[26px] bg-[#FEEBE7] rounded-full flex justify-center items-center'>
                                  <img 
                                    src={bedIcon}
                                    alt='bed-icon'
                                  />
                                </div>
                                <p className='text-sm text-gray-500'>{`${prop.attributes.beds} Beds`}</p>
                              </div>
                              <div className='flex flex-row gap-3 items-center'>
                                <div className='w-[26px] h-[26px] bg-[#FEEBE7] rounded-full flex justify-center items-center'>
                                  <img 
                                    src={bathIcon}
                                    alt='bed-icon'
                                  />
                                </div>
                                <p className='text-sm text-gray-500'>{`${prop.attributes.bathroom} Baths`}</p>
                              </div>
                              <div className='flex flex-row gap-3 items-center'>
                                <div className='w-[26px] h-[26px] bg-[#FEEBE7] rounded-full flex justify-center items-center'>
                                  <img 
                                    src={areaIcon}
                                    alt='bed-icon'
                                  />
                                </div>
                                <p className='text-sm text-gray-500'>{`${prop.attributes.area} Sq. ft`}</p>
                              </div>
                            </div>
                          </div>

                          <hr className='border-gray-400 mt-1 px-2 place-self-center w-[95%]' />
                          
                          <div className='flex flex-row justify-between items-center px-3 pb-3'>
                            <h1 className='font-semibold text-lg sm:text-base md:text-lg'>{prop.price}</h1>
                            <Link to={'/'} className='text-[#6E8C03] font-semibold sm:text-sm md:text-base'>
                              View Details
                            </Link>
                          </div>
                        </div>
                    )
                  })
                }
              </div>

              {/* Indicator dots */}
              <div className='hidden sm:flex items-center flex-row'>
                {moreCompaniesProp?.map((item, index)=>{
                  return (
                    <div key={index} onClick={()=>goToSlide(index)} className='text-slate-300 cursor-pointer'>
                      {
                        index === currentIndex ? <RxDotFilled size={28} color='#6E8C03'/> : <RxDotFilled size={25}/>
                      }
                    </div>
                  )
                })}
              </div>

              <Link to={'/'} className='mt-3 w-[180px] text-white font-medium py-3.5 bg-[#6E8C03] rounded-lg text-center hover:opacity-90 transition duration-100 focus:outline-none  '>
                See our listings
              </Link>
            </section>
          </Layout>
        )}
    </>
  )
}

export default Home