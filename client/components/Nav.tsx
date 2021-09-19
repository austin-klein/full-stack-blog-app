import { NextPage } from "next";
import Link from "next/link";
import styles from "../styles/Nav.module.scss";

const Nav: NextPage = () => {
  return (
    <nav className={styles.nav}>
      <Link href="/login">Login</Link>
      <Link href="/register">Register</Link>
      <Link href="/">Main</Link>
      <Link href="/add-post">Add</Link>
    </nav>
  );
};

export default Nav;
