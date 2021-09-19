import type { NextPage } from "next";
import { FormEvent, useState } from "react";
import { useQuery } from "@apollo/client";
import styles from "../styles/Forms.module.scss";

const Register: NextPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  interface Registerdata {
    username: string;
    password: string;
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const data: Registerdata = {
      username,
      password,
    };

    console.log(data);
  };

  return (
    <main className={styles.main}>
      <h1>Register Page</h1>
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

export default Register;
