import React from "react"
import Header from "./header"
import Footer from "./Footer"

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main className="bg-black h-screen px-8 md:px-10 lg:px-12">
        {children}
      </main>
      <Footer />
    </>
  )
}

export default Layout
