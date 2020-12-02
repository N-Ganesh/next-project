const { default: Header } = require("./Header");

import NavHeader from "./Header";
import Footer from "./Footer";
const Layout = ({ children }) => {
  return (
    <>
      <NavHeader />
      {children}
      <Footer />
    </>
  );
};
export default Layout;
