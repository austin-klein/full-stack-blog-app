import { NextPage } from "next";
import Nav from "./Nav";

const Layout: NextPage = ({ children }) => {
  return (
    <>
      <Nav />
      {children}
    </>
  );
};

export default Layout;
