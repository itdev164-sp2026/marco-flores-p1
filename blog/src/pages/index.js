import * as React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import Layout from "../components/layout"
import Seo from "../components/seo"

const Hero = styled.section`
  text-align: center;
  margin-bottom: 40px;
`

const Title = styled.h1`
  font-size: 40px;
  margin-bottom: 10px;
`

const Subtitle = styled.p`
  font-size: 18px;
  color: #555;
`

const SectionTitle = styled.h2`
  margin-top: 40px;
`

const CategoryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 20px;
  margin-top: 20px;
`

const Card = styled(Link)`
  border: 1px solid #eee;
  border-radius: 10px;
  padding: 20px;
  text-align: center;
  font-weight: 600;
  transition: 0.2s;

  &:hover {
    background: #f8f8f8;
  }
`

export default function HomePage() {
  return (
    <Layout>
      <Hero>
        <Title>SipSpot</Title>
        <Subtitle>
          Discover delicious hot and cold drink recipes.
        </Subtitle>
      </Hero>

      <SectionTitle>Browse Hot Drinks</SectionTitle>

      <CategoryGrid>
        <Card to="/hot/coffee">Coffee</Card>
        <Card to="/hot/cappuccino">Cappuccino</Card>
        <Card to="/hot/latte">Latte</Card>
        <Card to="/hot/tea">Tea</Card>
      </CategoryGrid>

      <SectionTitle>Browse Cold Drinks</SectionTitle>

      <CategoryGrid>
        <Card to="/cold/cocktails">Cocktails</Card>
        <Card to="/cold/juices">Juices</Card>
        <Card to="/cold/smoothies">Smoothies</Card>
        <Card to="/cold/frappuccinos">Frappuccinos</Card>
      </CategoryGrid>

      <SectionTitle>All Recipes</SectionTitle>

      <CategoryGrid>
        <Card to="/recipes">View All Recipes</Card>
      </CategoryGrid>
    </Layout>
  )
}

export const Head = () => <Seo title="Home" />