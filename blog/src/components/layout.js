import React from "react"
import styled, { createGlobalStyle } from "styled-components"
import { Link } from "gatsby"

const GlobalStyle = createGlobalStyle`
  * { box-sizing: border-box; }
  body { margin: 0; font-family: system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif; }
  a { color: inherit; text-decoration: none; }
`

const Header = styled.header`
  padding: 16px 24px;
  border-bottom: 1px solid #eee;
`

const Nav = styled.nav`
  display: flex;
  gap: 16px;
  align-items: center;
`

const Brand = styled(Link)`
  font-weight: 700;
  margin-right: 16px;
`

const Main = styled.main`
  max-width: 1000px;
  margin: 0 auto;
  padding: 24px;
`

const Footer = styled.footer`
  padding: 16px 24px;
  border-top: 1px solid #eee;
  text-align: center;
`

export default function Layout({ children }) {
  return (
    <>
      <GlobalStyle />
      <Header>
        <Nav>
          <Brand to="/">SipSpot</Brand>
          <Link to="/hot">Hot Drinks</Link>
          <Link to="/cold">Cold Drinks</Link>
          <Link to="/about">About</Link>
        </Nav>
      </Header>

      <Main>{children}</Main>

      <Footer>© {new Date().getFullYear()} SipSpot</Footer>
    </>
  )
}