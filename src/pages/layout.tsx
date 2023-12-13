import { Outlet, Link } from "react-router-dom";
import Header from '../Components/header';
import Footer from '../Components/footer';

const Layout = () => {
  return (
    <>
      <Header></Header>
      <Outlet />
      <Footer></Footer>
    </>
  )
};

export default Layout;
