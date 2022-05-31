import styled from 'styled-components';
import type { NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <PageWrapper>
      <Header></Header>
      <Nav></Nav>
      <Main></Main>
      <Aside></Aside>
      <Footer></Footer>
    </PageWrapper>
  );
};

const PageWrapper = styled.div`
  display: grid;
  grid-template-columns: 200px 1fr 150px;
  grid-template-rows: 4rem 1fr 5rem;
  grid-template-areas:
    'header header header'
    'sidebar main ad'
    'footer footer footer';
  min-height: 100%;
`;

const Header = styled.header`
  grid-area: header;
  background-color: lightyellow;
`;
const Nav = styled.nav`
  grid-area: sidebar;
  background-color: mediumaquamarine;
`;

const Main = styled.main`
  grid-area: main;
  background-color: lightblue;
`;

const Aside = styled.aside`
  grid-area: ad;
  background-color: lavender;
`;
const Footer = styled.footer`
  grid-area: footer;
  background-color: papayawhip;
`;

export default Home;
