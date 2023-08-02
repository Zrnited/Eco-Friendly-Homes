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
          </Layout>
        )}
    </>
  )
}

export default Home