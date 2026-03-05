import * as React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => {
  return (
    <Layout>
      <h1>SipSpot</h1>
      <p>
        Browse drink recipes by temperature and category — hot or cold, alcoholic
        or non-alcoholic.
      </p>

      <h2>Start browsing</h2>
      <ul>
        <li>
          <Link to="/cold">Cold Drinks</Link>
        </li>
        <li>
          <Link to="/hot">Hot Drinks</Link>
        </li>
      </ul>

      <h2>Popular categories</h2>
      <ul>
        <li>Cold: Cocktails, Mocktails, Juices, Smoothies, Frappuccinos</li>
        <li>Hot: Coffee, Cappuccino, Latte, Hot Chocolate, Tea</li>
      </ul>
    </Layout>
  )
}

export const Head = () => <Seo title="Home" />
export default IndexPage