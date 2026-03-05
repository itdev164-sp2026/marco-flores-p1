import * as React from "react"
import Layout from "../../components/layout"
import Seo from "../../components/seo"

export default function OldFashionedRecipePage() {
  return (
    <Layout>
      <h1>Old Fashioned</h1>
      <p><b>Type:</b> Cold • Alcoholic</p>

      <h2>Ingredients</h2>
      <ul>
        <li>2 oz bourbon or rye whiskey</li>
        <li>1 sugar cube (or 1 tsp sugar)</li>
        <li>2–3 dashes Angostura bitters</li>
        <li>Orange peel</li>
        <li>Ice (large cube recommended)</li>
      </ul>

      <h2>Instructions</h2>
      <ol>
        <li>Add sugar and bitters to a glass and muddle with a splash of water.</li>
        <li>Add whiskey and a large ice cube.</li>
        <li>Stir for 15–20 seconds.</li>
        <li>Express orange peel over the drink and drop it in.</li>
      </ol>
    </Layout>
  )
}

export const Head = () => <Seo title="Old Fashioned" />