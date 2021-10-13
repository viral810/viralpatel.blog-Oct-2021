import * as React from "react"
import SEO from '../components/seo'
import Layout from '../components/Layout'

// markup
const IndexPage = () => {
  return (
    <>
      <SEO />

      <article>
        <h1>This is homepage</h1>
      </article>
    </>
  )
}

export default IndexPage

IndexPage.Layout = Layout
