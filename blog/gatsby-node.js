const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const result = await graphql(`
    {
      allContentfulDrinkRecipe {
        nodes {
          slug
        }
      }
    }
  `)

  if (result.errors) {
    throw result.errors
  }

  const recipes = result.data.allContentfulDrinkRecipe.nodes
  const template = path.resolve("./src/templates/drink-recipe.js")

  recipes.forEach(recipe => {
    createPage({
      path: `/recipes/${recipe.slug}`,
      component: template,
      context: {
        slug: recipe.slug,
      },
    })
  })
}