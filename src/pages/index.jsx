import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/Hero"
import About from "../components/About"
import Projects from "../components/Projects"

const IndexPage = () => (
  <Layout>
    <SEO title="JvW — Porfolio" />
    <Hero />
    <About />
    <Projects />
  </Layout>
)

export default IndexPage
