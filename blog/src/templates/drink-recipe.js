import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"

export default function DrinkRecipeTemplate({ data }) {
  const recipe = data.contentfulDrinkRecipe

  const ingredientsText = recipe.ingredients?.ingredients || ""
  const instructionsText = recipe.instructions?.instructions || ""

  const ingredientsList = ingredientsText.split("\n").filter(Boolean)
  const instructionsList = instructionsText.split("\n").filter(Boolean)

  return (
    <Layout>
      <h1>{recipe.title}</h1>

      <p>
        <b>Type:</b> {recipe.temperature} • {recipe.category}
        {recipe.isAlcoholic ? " • Alcoholic" : " • Non-Alcoholic"}
      </p>

      {recipe.description && <p>{recipe.description}</p>}

      <h2>Ingredients</h2>
      <ul>
        {ingredientsList.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      <h2>Instructions</h2>
      <ol>
        {instructionsList.map((step, index) => (
          <li key={index}>{step}</li>
        ))}
      </ol>
    </Layout>
  )
}

export const query = graphql`
  query ($slug: String!) {
    contentfulDrinkRecipe(slug: { eq: $slug }) {
      title
      slug
      temperature
      category
      isAlcoholic
      description
      ingredients {
        ingredients
      }
      instructions {
        instructions
      }
    }
  }
`

export const Head = ({ data }) => (
  <Seo title={data.contentfulDrinkRecipe.title} />
)