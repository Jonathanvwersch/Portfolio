import React, { useState, useEffect } from "react"
import Header from "./header"
import Footer from "./Footer"
import Loading from "./Loading"

const Layout = ({ children }) => {
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    setLoading(false)
  }, [])
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          <Header />
          <main>{children}</main>
          <Footer />
        </>
      )}
    </>
  )
}

export default Layout
