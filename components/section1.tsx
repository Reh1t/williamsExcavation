import type { NextPage } from "next";
import styles from "./section1.module.css";

export type Section1Type = {
  className?: string;
};

const Section1: NextPage<Section1Type> = ({ className = "" }) => {
  return (
    <section className={[styles.section4, className].join(" ")}>
      <div className={styles.title}>
        <a className={styles.about}>ABOUT</a>
        <h1 className={styles.williamsExcavation}>
          <span>{`WILLIAMS `}</span>
          <b>EXCAVATION</b>
        </h1>
      </div>
      <div className={styles.technology}>
        <div className={styles.techDescription}>
          <div className={styles.text}>
            <div className={styles.equippedWithCuttingEdge}>
              Equipped with cutting-edge technology, we ensure every job is
              completed with precision and care. Understanding that no two
              projects are the same, we work closely with our clients to bring
              their ideas to life. Whether you’re looking for basic landscaping
              or require complex excavation work, you can rely on us for
              outstanding, reliable service every step of the way.
            </div>
          </div>
          <img
            className={styles.ornamentIcon}
            alt=""
            src="/ornament-1@2x.png"
          />
        </div>
      </div>
    </section>
  );
};

export default Section1;
