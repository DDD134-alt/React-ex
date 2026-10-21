import { Outlet } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh; /* 보이는 화면은 100% 쓰겠다는 뜻 */
  justify-content: space-between;
  align-items: center;
`;

const Header = styled.div`
  display: flex;
  max-width: 1024px;
  width: 100%;
  height: 60px;
  background-color: gray;
`;

const Main = styled.div`
  display: flex;
  max-width: 1024px;
  height: auto;
`;

const Footer = styled.div`
  display: flex;
  max-width: 1024px;
  width: 100%;
  height: 60px;
  background-color: gray;
`;

const Layout = () => {
  return (
    <Container>
      <Header>해더영역</Header>
      <Main>
        <Outlet />
      </Main>
      <Footer>풋터영역</Footer>
    </Container>
  );
};

export default Layout;
