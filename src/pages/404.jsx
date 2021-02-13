import { Link } from "gatsby"
import React from "react"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <div className="absolute left-0 top-0 bottom-0 right-0 flex items-center justify-center">
    <SEO title="404" />
    <Link to="/">
      <p className="text-white font-mono text-sm">404</p>
    </Link>
  </div>
)

export default NotFoundPage
