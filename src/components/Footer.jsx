import React from 'react'

const Footer = () => {
  return (
    <footer className='bg-[#D2DBB1] py-10 px-5'>
        <div className='bg-[#c4d098] flex rounded-xl justify-center items-center py-8'>
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

        <div></div>
        
        <div></div>
    </footer>
  )
}

export default Footer