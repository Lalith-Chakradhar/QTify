import React from "react";
// import ReactComponent as SearchIcon is only valid for .svg image types 
import { ReactComponent as SearchIcon } from "../../assets/search-icon.svg";
import styles from "./Search.module.css";

function Search({placeholder, searchData}) {
    const onSubmit = (e) => {
        e.preventDefault();
    }
    return (
        <form className={styles.wrapper} onSubmit={onSubmit}>
            <input className={styles.search} required placeholder={placeholder}/>
            <button className={styles.searchButton} type="submit">
            <SearchIcon/>
            </button>
        </form>)
}

export default Search;