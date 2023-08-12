import React, { useEffect, useState } from 'react';
import Layout from '../components/Layout';
import { Link } from 'react-router-dom';
import Loader from '../components/Loader';

const Properties = () => {

    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        window.scrollTo(0, 0);
    }, [])

    useEffect(()=>{
        setTimeout(()=>{
          setLoading(false);
        }, 3000)
      }, [])

  return (
    <>
        {
            loading 
            ? (<Loader />) :
            (<Layout>
                <div className='h-screen flex flex-col items-center justify-center'>
                    <h1>
                        Properties will be added soon. Please bear with us.
                    </h1>
                    <Link className='underline text-[#6E8C03]' to={'/'}>
                        Go back
                    </Link>
                </div>
            </Layout>) 
        }
    </>
  )
}

export default Properties