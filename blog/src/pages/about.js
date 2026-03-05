import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"

export default function AboutPage() {
  return (
    <Layout>
      <h1>About SipSpot</h1>
      <p>A drink recipe browsing site built for ITDEV-164.</p>
    </Layout>
  )
}

export const Head = () => <Seo title="About" />