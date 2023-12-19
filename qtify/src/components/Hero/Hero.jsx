import React from 'react';
import HeroImage from "../../assets/hero-image.svg";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <div className={styles.heroContainer}>
    <div className={styles.heroText}>
    <p>100 Thousand Songs, ad-free</p>
    <p>Over thousands podcast episodes</p>
    </div>
    <div>
      <img src={HeroImage} alt="HeroImage"/>
    </div>
    </div>
  )
}





