import { Outlet, Link } from "react-router-dom";
import Header from '../Components/header';
import Footer from '../Components/footer';

const Layout = () => {
  return (
    <>
      <Header></Header>
      <Footer></Footer>

      <Outlet />
    </>
  )
};

export default Layout;
