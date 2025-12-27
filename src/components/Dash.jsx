
import SideBar from "../components/SideBar";
import { Outlet } from "react-router-dom";
import { ThemeContextProvider } from "../context/ThemeContextProvider";
const Dash = () => {
  return (
      <ThemeContextProvider>
      <SideBar>
        <Outlet />
      </SideBar>
    </ThemeContextProvider>
  );
};

export default Dash;
