import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/hero"
import About from "../components/about"
import Projects from "../components/projects"
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
