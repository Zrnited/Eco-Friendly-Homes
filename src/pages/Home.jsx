import React, { useEffect, useState } from 'react'
import Loader from '../components/Loader'
import Layout from '../components/Layout';

const Home = () => {

  const [loading, setLoading] = useState(true);

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
            <h1 className='h-screen flex items-center justify-center'>Daddy's back!</h1>
          </Layout>
        )}
    </>
  )
}

export default Home