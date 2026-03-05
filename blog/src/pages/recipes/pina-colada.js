import * as React from "react"
import Layout from "../../components/layout"
import Seo from "../../components/seo"

export default function PinaColadaRecipePage() {
  return (
    <Layout>
      <h1>Piña Colada</h1>
      <p><b>Type:</b> Cold • Alcoholic</p>

      <h2>Ingredients</h2>
      <ul>
        <li>2 oz rum</li>
        <li>3 oz pineapple juice</li>
        <li>2 oz coconut cream</li>
        <li>1 cup ice</li>
        <li>Pineapple slice (optional)</li>
      </ul>

      <h2>Instructions</h2>
      <ol>
        <li>Add rum, pineapple juice, coconut cream, and ice to a blender.</li>
        <li>Blend until smooth.</li>
        <li>Pour into a chilled glass.</li>
        <li>Garnish with pineapple (optional).</li>
      </ol>
    </Layout>
  )
}

export const Head = () => <Seo title="Piña Colada" />