import * as React from "react"
import Layout from "../../components/layout"
import Seo from "../../components/seo"
import DrinkCard from "../../components/DrinkCard"
import Grid from "../../components/Grid"

export default function RecipesIndexPage() {
  const recipes = [
    {
      title: "Margarita",
      badge: "Cold • Alcoholic",
      description: "Tequila + lime + triple sec classic.",
      to: "/recipes/margarita",
    },
    {
      title: "Mojito",
      badge: "Cold • Alcoholic",
      description: "Minty rum drink with lime and soda.",
      to: "/recipes/mojito",
    },
    {
      title: "Piña Colada",
      badge: "Cold • Alcoholic",
      description: "Pineapple + coconut + rum.",
      to: "/recipes/pina-colada",
    },
    {
      title: "Old Fashioned",
      badge: "Cold • Alcoholic",
      description: "Whiskey cocktail with bitters and sugar.",
      to: "/recipes/old-fashioned",
    },
  ]

  return (
    <Layout>
      <h1>All Recipes</h1>
      <p>Browse all drink recipes on SipSpot.</p>

      <Grid>
        {recipes.map(r => (
          <DrinkCard
            key={r.to}
            title={r.title}
            badge={r.badge}
            description={r.description}
            to={r.to}
          />
        ))}
      </Grid>
    </Layout>
  )
}

export const Head = () => <Seo title="Recipes" />