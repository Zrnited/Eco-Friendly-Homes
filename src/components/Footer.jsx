import React from 'react';
import ecoLogoBlack from '../assets/eco-logo-black.png';
import icLinkedin from '../assets/ic-Linkedin.png';
import icFacebook from '../assets/ic-Facebook.png';
import icTwitter from '../assets/ic-Twitter.png';
import { Link } from 'react-router-dom';

const Footer = () => {

    const footerLinks = [
       {
        title: 'Our Services',
        links: [
            {
                name: 'Help center',
                link: '/helpcenter'
            },
            {
                name: 'FAQ',
                link: '/faq'
            },
            {
                name: 'Transaction',
                link: '/transaction'
            },
            {
                name: 'Investment',
                link: '/investment'
            },
        ]
       },
       {
        title: 'Product',
        links: [
            {
                name: 'Employee database',
                link: '/database'
            },
            {
                name: 'Payroll',
                link: '/payroll'
            },
            {
                name: 'Absences',
                link: '/absences'
            },
            {
                name: 'Time tracking',
                link: '/tracking'
            },
            {
                name: 'Shift planner',
                link: '/planner'
            },
            {
                name: 'Recruiting',
                link: '/recruiting'
            },
        ]
       },
       {
        title: 'Company',
        links: [
            {
                name: 'About Us',
                link: '/about'
            },
            {
                name: 'Career',
                link: '/career'
            },
            {
                name: 'Management',
                link: '/management'
            },
            {
                name: 'Blog',
                link: '/blog'
            },
        ]
       },
    ]

  return (
    <footer className='bg-[#D2DBB1] pt-10 px-5'>
        {/* Subscribe tab */}
        <div className='bg-[#c4d098] flex rounded-xl justify-center items-center py-8 lg:hidden'>
            <div className='w-[80%] flex flex-col gap-2'>
                <h2 className='font-semibold'>Subscribe</h2>
                <form className='w-full h-[36px]'>
                    <input type='text' placeholder='Email address' className='text-sm h-full w-[77%] border px-3 border-[#E7E8F2] rounded-s-md focus:outline-none' />
                    <button className='text-sm w-[23%] h-full bg-[#6E8C03] text-white rounded-e-md'>
                        Send
                    </button>
                </form>
                <p className='text-sm text-[#262626]'>
                    Don't wanna miss something? Subscribe right now and get special promotion and super attractive price quote from us.
                </p>
            </div>
        </div>

        <div className='md:flex md:flex-col md:items-center lg:flex lg:flex-row lg:justify-around lg:items-center'>
            <div className='sm:py-6 sm:flex sm:justify-between sm:items-start md:justify-center md:gap-16 lg:gap-10 lg:items-center xl:gap-20'>
                {/* Company's address/contact */}
                <div className='py-6 w-[185px] flex flex-col gap-6 text-xs sm:py-0 md:text-base'>
                    <img 
                        src={ecoLogoBlack}
                        alt='eco-black'
                        className='w-[81px]'
                    />
                    <p>
                        Metropolitan School of Business and Management London, UK.
                    </p>
                    <p>
                        37th Floor, One Canada Square, E14 5DY, Canary Wharf, London. United Kingdom.
                    </p>
                    <div className='flex flex-row justify-between w-[135px]'>
                        <a href='https://instagram.com/eco' target='_blank' className='border border-gray-500 rounded-full h-[35px] w-[35px] flex items-center justify-center'>
                            <img
                                src={icLinkedin}
                                alt='linkeded-icon'
                            />
                        </a>
                        <a href='https://facebook.com/eco' target='_blank' className='border border-gray-500 rounded-full h-[35px] w-[35px] flex items-center justify-center'>
                            <img
                                src={icFacebook}
                                alt='linkeded-icon'
                            />
                        </a>
                        <a href='https://twitter.com/eco' target='_blank' className='border border-gray-500 rounded-full h-[35px] w-[35px] flex items-center justify-center'>
                            <img
                                src={icTwitter}
                                alt='linkeded-icon'
                            />
                        </a>
                    </div>
                </div>
                
                {/* Company's links */}
                <div className='flex flex-row justify-between sm:gap-10 lg:gap-5'>
                    {
                        footerLinks?.map((item)=>{
                            return (
                                <div className='flex flex-col gap-2'>
                                    <h1 className='text-sm font-bold md:text-base'>
                                        {item.title}
                                    </h1>
                                    <ul className='md:flex md:flex-col md:gap-1'>
                                        {
                                            item.links?.map((linkItem)=>{
                                                return (
                                                    <li>
                                                        <Link className='text-xs text-gray-600 md:text-base' to={linkItem.link}>
                                                            {linkItem.name}
                                                        </Link>
                                                    </li>
                                                )
                                            })
                                        }
                                    </ul>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            {/* Other subscribe tab */}
            <div className='bg-[#c4d098] hidden rounded-xl justify-center items-center py-8 w-[338px] lg:flex xl:w-[370px]'>
                <div className='w-[80%] flex flex-col gap-2'>
                    <h2 className='font-semibold'>Subscribe</h2>
                    <form className='w-full h-[36px]'>
                        <input type='text' placeholder='Email address' className='text-sm h-full w-[77%] border px-3 border-[#E7E8F2] rounded-s-md focus:outline-none' />
                        <button className='text-sm w-[23%] h-full bg-[#6E8C03] text-white rounded-e-md'>
                            Send
                        </button>
                    </form>
                    <p className='text-sm text-[#262626]'>
                        Don't wanna miss something? Subscribe right now and get special promotion and super attractive price quote from us.
                    </p>
                </div>
            </div>
        </div>

        <div className='mt-10 flex flex-col gap-1 mb-5'>
            <hr className='border-gray-400' />
            <p className='text-xs font-semibold text-center md:text-base'>
                ©2023 Eco-Friendly. All rights reserved.
            </p>
        </div>
    </footer>
  )
}

export default Footer