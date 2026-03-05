import * as React from "react"
import Layout from "../../components/layout"
import Seo from "../../components/seo"

export default function MargaritaRecipePage() {
  return (
    <Layout>
      <h1>Margarita</h1>
      <p><b>Type:</b> Cold • Alcoholic</p>

      <h2>Ingredients</h2>
      <ul>
        <li>2 oz tequila</li>
        <li>1 oz lime juice</li>
        <li>1 oz triple sec</li>
        <li>Salt (optional)</li>
        <li>Ice</li>
      </ul>

      <h2>Instructions</h2>
      <ol>
        <li>Salt the rim (optional).</li>
        <li>Add tequila, lime, and triple sec to a shaker with ice.</li>
        <li>Shake 10–15 seconds.</li>
        <li>Strain into a glass over fresh ice.</li>
      </ol>
    </Layout>
  )
}

export const Head = () => <Seo title="Margarita" />