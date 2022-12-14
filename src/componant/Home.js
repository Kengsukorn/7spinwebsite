import React from 'react'
import Banner from './home/Banner';

import { Helmet } from "react-helmet";


function Home() {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>7Spin</title>
      </Helmet>
      <Banner />
    </>
  )
}

export default Home