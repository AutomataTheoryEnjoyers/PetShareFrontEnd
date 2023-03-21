import styled from "styled-components"

export const Navbar = () => {
  return <Bar>
    <Header>PetShare</Header>
    <Links>
      <Link href="/">Home</Link>
      <Link href="/create">New Blog</Link>
    </Links>
  </Bar>
}

const Links = styled.div`
  margin-left: auto;
`

const Header = styled.h1`
  font-size: 40px;
  padding: 10px;
`

const Link = styled.a`
  margin-left: 16px;
  text-decoration: none;
  padding: 6px;
`

const Bar = styled.nav`
  display: flex;
  background-color: #3EAA6F;
  align-items: center;
  margin: 0;
  border-bottom: 1px solid #f2f2f2;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
`
