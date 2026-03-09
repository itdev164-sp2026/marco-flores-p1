import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../../components/layout"
import Seo from "../../components/seo"
import DrinkCard from "../../components/DrinkCard"
import Grid from "../../components/Grid"

export default function RecipesIndexPage({ data }) {
  const recipes = data.allContentfulDrinkRecipe.nodes

  return (
    <Layout>
      <h1>All Recipes</h1>
      <p>Browse all drink recipes on SipSpot.</p>

      <Grid>
        {recipes.map(recipe => (
          <DrinkCard
            key={recipe.slug}
            title={recipe.title}
            badge={`${recipe.temperature} • ${recipe.isAlcoholic ? "Alcoholic" : "Non-Alcoholic"}`}
            description={recipe.description}
            to={`/recipes/${recipe.slug}`}
          />
        ))}
      </Grid>
    </Layout>
  )
}

export const query = graphql`
  {
    allContentfulDrinkRecipe(sort: { title: ASC }) {
      nodes {
        title
        slug
        temperature
        isAlcoholic
        description
      }
    }
  }
`

export const Head = () => <Seo title="Recipes" />