"use client";
import { useEffect, useState } from "react";
import styles from "./MeowArticle.module.css";

/* CSR */
export default function MeowArticle() {
  const [text, setText] = useState("데이터 준비중..");

  // mounted
  useEffect(() => {
    fetch("https://meowfacts.herokuapp.com")
      .then((res) => res.json())
      .then(({ data }) => setText(data[0]));
  }, []);

  return <article className={styles.article}>{text}</article>;
}
