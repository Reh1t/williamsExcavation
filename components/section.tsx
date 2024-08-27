import type { NextPage } from "next";
import styles from "./section.module.css";

export type SectionType = {
  className?: string;
};

const Section: NextPage<SectionType> = ({ className = "" }) => {
  return (
    <section className={[styles.section2, className].join(" ")}>
      <header className={styles.williams20logo3transparentParent}>
        <img
          className={styles.williams20logo3transparentIcon}
          loading="lazy"
          alt=""
          src="/williams20logo3transparent20bgroundpng@2x.png"
        />
        <b
          className={styles.byWilliamsExcavation}
        >{`by Williams Excavation & Aggregate`}</b>
      </header>
      <div className={styles.intro}>
        <div className={styles.ornamentParent}>
          <img
            className={styles.ornamentIcon}
            loading="lazy"
            alt=""
            src="/ornament@2x.png"
          />
          <div className={styles.welcomeToWilliamsExcavationParent}>
            <h1 className={styles.welcomeToWilliamsContainer}>
              <p className={styles.welcomeTo}>{`Welcome to `}</p>
              <p
                className={styles.welcomeTo}
              >{`WILLIAMS EXCAVATION & AGGREGATE`}</p>
            </h1>
            <div className={styles.text}>
              <div
                className={styles.atWilliamsExcavation}
              >{`At Williams Excavation & Aggregate we specialise in delivering top-tier excavation and landscaping services, whether your project is large or small. From preparing land for a new construction project to designing and implementing beautiful landscapes, our experienced team is here to help.`}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section;
