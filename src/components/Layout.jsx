import Header from './Header';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';
import { Container } from 'react-bootstrap';

const Layout = () => {
  return (
    <>
      <Header />
      <Container className="py-4">
        <Outlet />
      </Container>
      <Footer />
    </>
  );
};

export default Layout;
