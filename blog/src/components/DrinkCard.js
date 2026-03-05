import * as React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const Card = styled.article`
  border: 1px solid #eee;
  border-radius: 12px;
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`

const TitleRow = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 12px;
  align-items: baseline;
`

const Title = styled.h2`
  margin: 0;
  font-size: 20px;
`

const Badge = styled.span`
  font-size: 12px;
  padding: 4px 10px;
  border: 1px solid #ddd;
  border-radius: 999px;
  white-space: nowrap;
`

const Meta = styled.p`
  margin: 0;
  color: #555;
  font-size: 14px;
`

const ButtonLink = styled(Link)`
  display: inline-block;
  padding: 10px 12px;
  border: 1px solid #ddd;
  border-radius: 10px;
  width: fit-content;
`

export default function DrinkCard({ title, badge, description, to }) {
  return (
    <Card>
      <TitleRow>
        <Title>{title}</Title>
        {badge ? <Badge>{badge}</Badge> : null}
      </TitleRow>
      {description ? <Meta>{description}</Meta> : null}
      {to ? <ButtonLink to={to}>View Recipe →</ButtonLink> : null}
    </Card>
  )
}