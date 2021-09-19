import type { NextPage } from "next";
import { FormEvent, useState } from "react";
import styles from "../styles/Forms.module.scss";
import { useMutation } from "@apollo/client";
import { LOGIN_MUTATION } from "../queries";
import { useRouter } from "next/router";

const Login: NextPage = () => {
  const [loginUser] = useMutation(LOGIN_MUTATION);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const { data } = await loginUser({
        variables: {
          username,
          password,
        },
      });
      console.log(data.login.accessToken);
      localStorage.setItem("accessToken", data.login.accessToken);
      router.push("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <main className={styles.main}>
      <h1>Login Page</h1>
      <form onSubmit={(e) => handleSubmit(e)} className={styles.form}>
        <input
          type="text"
          placeholder="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="text"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </main>
  );
};

export default Login;
