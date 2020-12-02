const { default: Header } = require("./Header");

import NavHeader from "./Header";
const Layout = ({ children }) => {
  return (
    <>
      <NavHeader />
      {children}
    </>
  );
};
export default Layout;
