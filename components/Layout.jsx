import { useState } from "react";
import NavHeader from "./Header";
import Footer from "./Footer";
import DisplayModeContext from "./DisplayModeContext";
const Layout = ({ children }) => {
  const [switchMode, setSwitchMode] = useState(null);
  const getMode = () => {
    console.log(switchMode);
    if (switchMode === 1) {
      return "dark-mode";
    } else if (switchMode === 0) {
      return "light-mode";
    }
    return "default-light-mode";
  };
  return (
    <DisplayModeContext.Provider value={{ switchMode, setSwitchMode }}>
      <div className={getMode()}>
        <NavHeader />
        {children}
        <Footer />
      </div>
    </DisplayModeContext.Provider>
  );
};
export default Layout;
