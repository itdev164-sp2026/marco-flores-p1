import * as React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../../components/layout"
import Seo from "../../components/seo"
import DrinkCard from "../../components/DrinkCard"
import Grid from "../../components/Grid"

export default function LattePage({ data }) {
  const drinks = data.allContentfulDrinkRecipe.nodes

  return (
    <Layout>
      <h1>Latte Recipes</h1>
      <p>Browse hot latte drinks.</p>

      <p>
        Want everything? <Link to="/recipes">View all recipes</Link>.
      </p>

      <Grid>
        {drinks.map(drink => (
          <DrinkCard
            key={drink.slug}
            title={drink.title}
            badge={`${drink.temperature} • ${drink.isAlcoholic ? "Alcoholic" : "Non-Alcoholic"}`}
            description={drink.description}
            to={`/recipes/${drink.slug}`}
          />
        ))}
      </Grid>
    </Layout>
  )
}

export const query = graphql`
  {
    allContentfulDrinkRecipe(
      filter: { temperature: { eq: "hot" }, category: { eq: "latte" } }
      sort: { title: ASC }
    ) {
      nodes {
        title
        slug
        temperature
        category
        isAlcoholic
        description
      }
    }
  }
`

export const Head = () => <Seo title="Latte Recipes" />