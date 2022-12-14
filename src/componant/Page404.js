import React from 'react'
import { Helmet } from "react-helmet";

function Page404() {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Page not found</title>
      </Helmet>
      <div>error 404</div>
    </>
  )
}

export default Page404