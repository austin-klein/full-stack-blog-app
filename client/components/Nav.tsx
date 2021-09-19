import { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Nav.module.scss";
import { useQuery } from "@apollo/client";
import { NAV_QUERY } from "../queries";

const Nav: NextPage = () => {
  const { loading, error, data } = useQuery(NAV_QUERY);

  if (error) {
    console.log(error);
  }
  console.log(data.getUser.image);

  return (
    <nav className={styles.nav}>
      <div className={styles.content}>
        <div className={styles.user}>
          <Image
            unoptimized={true}
            src={`${data.getUser.image}`}
            alt="person image"
            width={50}
            height={50}
          />

          <p> {data.getUser.username}</p>
        </div>
        <div className={styles.links}>
          <Link href="/login">Login</Link>
          <Link href="/register">Register</Link>
          <Link href="/">Main</Link>
          <Link href="/add-post">Add</Link>
        </div>

        <div>
          <button>Logout</button>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
