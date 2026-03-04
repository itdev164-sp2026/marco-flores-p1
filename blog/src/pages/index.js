import * as React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <h1>SipSpot</h1>
    <p>
      Find your next favorite drink. Filter by hot/cold, then by category like
      cocktails, juices, lattes, and more.
    </p>

    <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
      <Link to="/cold">Browse Cold Drinks →</Link>
      <Link to="/hot">Browse Hot Drinks →</Link>
      <Link to="/about">About →</Link>
    </div>

    <hr style={{ margin: "24px 0" }} />

    <h2>How it works</h2>
    <ol>
      <li>Choose Hot or Cold</li>
      <li>Pick a category (ex: Cocktails, Juices, Latte)</li>
      <li>Open a recipe and follow the steps</li>
    </ol>
  </Layout>
)

export const Head = () => <Seo title="Home" />
export default IndexPage