import React from "react";
import qtifylogo from "../../assets/qtify-logo.svg";
import styles from "./QLogo.module.css";

function QLogo() {
    return (
    <div className={styles.logo}>
    <img src={qtifylogo} alt="Icon"/>
    </div>
    );
}

export default QLogo;