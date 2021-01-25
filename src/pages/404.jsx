import { Link } from "gatsby"
import React from "react"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <div className="h-screen flex items-center justify-center">
    <SEO title="404" />
    <Link to="/">
      <p className="text-white font-mono text-sm">404</p>
    </Link>
  </div>
)

export default NotFoundPage
