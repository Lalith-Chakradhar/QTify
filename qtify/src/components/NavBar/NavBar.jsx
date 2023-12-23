import Button from "../Button/Button";
import Search from "../Search/Search";
import QLogo from "../QLogo/QLogo";
import styles from "./NavBar.module.css";
import React from 'react';

function NavBar({searchData}) {
  return (
    <nav className={styles.navbar}>
    <QLogo/>
    <Search placeholder={"Search a album of your choice"}
    searchData={searchData}
    />
    <Button>Give Feedback</Button>
    </nav>
  )
}

export default NavBar;