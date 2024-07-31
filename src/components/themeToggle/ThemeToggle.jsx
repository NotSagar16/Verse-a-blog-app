"use client";

import Image from "next/image";
import styles from "./themeToggle.module.css";
import { useContext } from "react";
import { ThemeContext } from "@/context/ThemeContext";
import { isAbsoluteUrl } from "next/dist/shared/lib/utils";

const ThemeToggle = () => {
  const { toggle, theme } = useContext(ThemeContext);

  return (
    <div
      className={styles.container}
      onClick={toggle}
      style={
        theme === "dark" ? { backgroundColor: "white" } : { backgroundColor: "#0f172a" }
      }
    >
      <Image src="/moon.png" alt="" width={14} height={14} style={{position:"absolute",left:3}}/>
      <div
        className={styles.ball}
        style={
          theme === "dark"
            ? { left: 3, background: "#0f172a" }
            : { right: 3, background: "white" }
        }
      ></div>
      <Image src="/sun.png" alt="" width={14} height={14} style={{position:"absolute", right:3}}/>
    </div>
  );
};

export default ThemeToggle;