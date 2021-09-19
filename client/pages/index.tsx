import type { NextPage } from "next";
import Image from "next/image";
import { useQuery } from "@apollo/client";
import { HOME_QUERY } from "../queries";
import styles from "../styles/Home.module.scss";

const Home: NextPage = () => {
  const { loading, error, data } = useQuery(HOME_QUERY);

  if (error) {
    console.log(error);
  }
  console.log(data.getUser.image);

  return (
    <main>
      {loading ? <div>loading...</div> : null}

      <section className={styles.container}>
        <div>
          <Image
            unoptimized={true}
            src={`${data.getUser.image}`}
            alt="person image"
            width={100}
            height={100}
          />
        </div>
        {data ? (
          data.posts.map((post: any) => {
            return (
              <article key={post.id} className={styles.card}>
                <div className={styles.top}>
                  <h2>{post.title}</h2>
                  <div className={styles.right}>
                    <Image src="/vercel.svg" alt="person image" width={50} height={50} />
                    <h3>{post.userId}</h3>
                  </div>
                </div>

                <p>{post.text}</p>
                <p className={styles.date}>Date of Post</p>
              </article>
            );
          })
        ) : (
          <div>no posts</div>
        )}
      </section>
    </main>
  );
};

export default Home;
