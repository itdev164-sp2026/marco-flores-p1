import * as React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"

export default function HotPage() {
  return (
    <Layout>
      <h1>Hot Drinks</h1>
      <p>Select a category:</p>

      <ul>
        <li><Link to="/hot/coffee">Coffee</Link></li>
        <li><Link to="/hot/cappuccino">Cappuccino</Link></li>
        <li><Link to="/hot/latte">Latte</Link></li>
        <li><Link to="/hot/tea">Tea</Link></li>
      </ul>
    </Layout>
  )
}

export const Head = () => <Seo title="Hot Drinks" />