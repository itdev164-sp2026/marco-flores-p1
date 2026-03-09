import * as React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"

export default function ColdPage() {
  return (
    <Layout>
      <h1>Cold Drinks</h1>
      <p>Select a category:</p>

      <ul>
        <li><Link to="/cold/cocktails">Cocktails</Link></li>
        <li><Link to="/cold/juices">Juices</Link></li>
        <li><Link to="/cold/smoothies">Smoothies</Link></li>
        <li><Link to="/cold/frappuccinos">Frappuccinos</Link></li>
      </ul>
    </Layout>
  )
}

export const Head = () => <Seo title="Cold Drinks" />