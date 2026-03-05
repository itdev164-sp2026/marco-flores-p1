import * as React from "react"
import Layout from "../../components/layout"
import Seo from "../../components/seo"
import DrinkCard from "../../components/DrinkCard"
import Grid from "../../components/Grid"

export default function CocktailsPage() {
  const drinks = [
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
      description: "Bourbon/rye with bitters and sugar.",
      to: "/recipes/old-fashioned",
    },
  ]

  return (
    <Layout>
      <h1>Cocktail Recipes</h1>
      <p>Browse alcoholic cocktail drink recipes.</p>
      <p>
         Want everything? Visit <a href="/recipes">All Recipes</a>.
      </p>

      <Grid>
        {drinks.map(d => (
          <DrinkCard
            key={d.title}
            title={d.title}
            badge={d.badge}
            description={d.description}
            to={d.to}
          />
        ))}
      </Grid>

      <p style={{ marginTop: 24 }}>(Next: we’ll create recipe pages.)</p>
    </Layout>
  )
}

export const Head = () => <Seo title="Cocktails" />