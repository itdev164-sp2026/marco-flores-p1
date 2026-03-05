import * as React from "react"
import Layout from "../../components/layout"
import Seo from "../../components/seo"

export default function MojitoRecipePage() {
  return (
    <Layout>
      <h1>Mojito</h1>
      <p><b>Type:</b> Cold • Alcoholic</p>

      <h2>Ingredients</h2>
      <ul>
        <li>2 oz white rum</li>
        <li>1 oz lime juice</li>
        <li>2 tsp sugar (or simple syrup)</li>
        <li>6–8 mint leaves</li>
        <li>Soda water</li>
        <li>Ice</li>
      </ul>

      <h2>Instructions</h2>
      <ol>
        <li>Muddle mint with sugar and lime in a glass.</li>
        <li>Add rum and fill the glass with ice.</li>
        <li>Top with soda water and stir gently.</li>
        <li>Garnish with mint and a lime wedge.</li>
      </ol>
    </Layout>
  )
}

export const Head = () => <Seo title="Mojito" />