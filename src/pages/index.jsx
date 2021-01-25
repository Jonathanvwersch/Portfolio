import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/Hero"
import About from "../components/About"
import Projects from "../components/Projects"
import Skills from "../components/skills"

const IndexPage = () => (
  <Layout>
    <SEO title="JvW — Porfolio" />
    <Hero />
    <About />
    <Skills />
    <Projects />
  </Layout>
)

export default IndexPage
