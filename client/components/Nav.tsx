import { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Nav.module.scss";
import { ApolloError, useQuery } from "@apollo/client";
import { NAV_QUERY } from "../queries";
import { useState, useEffect, useLayoutEffect } from "react";

const Nav: NextPage = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState<ApolloError>();

  // async function GetUser(username: string) {
  //   const { loading, error, data } = await useQuery(NAV_QUERY, {
  //     variables: username,
  //   });
  //   setData(data);
  //   setError(error);
  // }

  // useEffect(() => {
  //   GetUser("test");
  // }, []);

  // if (error) {
  //   console.log(error);
  // }
  // console.log(data);
  return (
    <>
      {/* {loading ? <div>loading...</div> : null} */}
      <nav className={styles.nav}>
        <div className={styles.content}>
          <div className={styles.user}>
            {data ? (
              <Image
                unoptimized={true}
                src={`/vercel.svg`}
                alt="person image"
                width={50}
                height={50}
              />
            ) : null}

            <p> {data ? data : null}</p>
          </div>
          <div className={styles.links}>
            <Link href="/login">Login</Link>
            <Link href="/register">Register</Link>
            <Link href="/">Main</Link>
            <Link href="/add-post">Add</Link>
            <Link href="/my-posts">My Posts</Link>
          </div>

          <div>
            <button>Logout</button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Nav;
